ZOLA ?= zola 
MDBOOK ?= mdbook

MAKE_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SITE_DIR := $(abspath ${MAKE_DIR}/site)
BOOK_DIR := $(abspath ${MAKE_DIR}/book)

TARGET_DIR := $(abspath ${MAKE_DIR}/target/site-docs)
SITE_TARGET_DIR ?= $(abspath ${TARGET_DIR}/site)
BOOK_TARGET_DIR := $(abspath ${SITE_DIR}/static/trust-dns-book/book)
DOCS_TARGET_DIR := $(abspath ${SITE_DIR}/static/trust-dns-docs/doc)

DOCS_SRC_DIR := $(abspath ${MAKE_DIR}/trust-dns/target/doc)
WORKTREE_DIR := /tmp/trust-dns-docs

CURRENT_BRANCH ?= $(strip $(shell git rev-parse --abbrev-ref HEAD))

.DEFAULT_GOAL := site

${TARGET_DIR}:
	mkdir -p ${TARGET_DIR}

${SITE_TARGET_DIR}: ${TARGET_DIR}
	mkdir -p ${SITE_TARGET_DIR}

${BOOK_TARGET_DIR}:
	mkdir -p ${BOOK_TARGET_DIR}

${DOCS_TARGET_DIR}:
	mkdir -p ${DOCS_TARGET_DIR}

trust-dns/.git:
	@echo "=====> linking trust-dns"
	git submodule update --init --depth 1 trust-dns
	cd trust-dns && \
	  git fetch --depth 1 origin && \
	  git reset --hard origin/master

trust-dns: trust-dns/.git
	# trust-dns

book/src/img/logo.svg: trust-dns
	mkdir -p $(dir $@)
	cp trust-dns/logo.svg $@

site/static/img/logo.svg: trust-dns
	mkdir -p $(dir $@)
	cp trust-dns/logo.svg $@

.PHONY: logo
logo: site/static/img/logo.svg book/src/img/logo.svg

.PHONY: site-deps
site-deps: ${SITE_TARGET_DIR} book docs logo

.PHONY: site
site: site-deps
	@echo "=====> site"
	cd ${SITE_DIR} && \
	  ${ZOLA} build --base-path ${SITE_DIR} --output-dir ${SITE_TARGET_DIR}

.PHONY: serve
serve: site-deps
	@echo "=====> serve"
	cd ${SITE_DIR} && \
	  ${ZOLA} serve --base-path ${SITE_DIR} --output-dir ${SITE_TARGET_DIR}

.PHONY: book
book: ${BOOK_TARGET_DIR} logo
	@echo "=====> book"
	cd ${BOOK_DIR} && \
	  ${MDBOOK} build --dest-dir ${BOOK_TARGET_DIR} ${BOOK_DIR}
	@echo "view book here: file://${BOOK_TARGET_DIR}/index.html"

.PHONY: docs
docs: trust-dns ${DOCS_TARGET_DIR}
	@echo "=====> docs"
	cd trust-dns && \
	  cargo doc --all-features --all --no-deps
	
	rm -rf ${DOCS_TARGET_DIR}
	cp -rp ${DOCS_SRC_DIR} ${DOCS_TARGET_DIR}

.PHONY: deploy
deploy: site
ifneq ("${CURRENT_BRANCH}", "master")
	@echo "=====> deploy will only work from the master branch, skipping ${CURRENT_BRANCH}"
	@true
else
	@echo "=====> deploying to github"
	git fetch --depth 1 origin gh-pages:gh-pages
	git worktree add ${WORKTREE_DIR} gh-pages
	rm -rf ${WORKTREE_DIR}/*
	cp -rp ${SITE_TARGET_DIR}/* ${WORKTREE_DIR}
	cd ${WORKTREE_DIR} && \
		git add -A && \
		git commit -m "deployed on $(shell date) by ${USER}" && \
		git push origin gh-pages
	git worktree remove ${WORKTREE_DIR}
	git worktree prune
endif

.PHONY: clean
clean:
	@echo "=====> clean"
	rm -rf ${TARGET_DIR}
	rm -rf ${BOOK_TARGET_DIR}
	rm -rf ${DOCS_TARGET_DIR}
	rm -rf ${DOCS_SRC_DIR}
	git submodule deinit -f trust-dns
	git worktree remove -f ${WORKTREE_DIR} || true
	git worktree prune || true