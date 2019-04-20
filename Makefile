MAKE_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SITE_DIR := $(abspath ${MAKE_DIR}/site)
BOOK_DIR := $(abspath ${MAKE_DIR}/book)

TARGET_DIR := $(abspath ${MAKE_DIR}/target/site-docs)
SITE_TARGET_DIR := $(abspath ${TARGET_DIR}/site)
BOOK_TARGET_DIR := $(abspath ${SITE_DIR}/static/trust-dns-book/book)
DOCS_TARGET_DIR := $(abspath ${SITE_DIR}/static/trust-dns-docs/doc)

DOCS_SRC_DIR := $(abspath ${MAKE_DIR}/trust-dns/target/doc)
WORKTREE_DIR := /tmp/trust-dns-docs

.PHONY: default
default: site

${TARGET_DIR}:
	mkdir -p ${TARGET_DIR}

${SITE_TARGET_DIR}: ${TARGET_DIR}
	mkdir -p ${SITE_TARGET_DIR}

${BOOK_TARGET_DIR}:
	mkdir ${BOOK_TARGET_DIR}

${DOCS_TARGET_DIR}:
	mkdir ${DOCS_TARGET_DIR}

trust-dns/.git:
	git submodule update --init --depth 1 trust-dns
	cd trust-dns && \
	  git fetch --depth 1 origin && \
	  git reset --hard origin/master

trust-dns: trust-dns/.git
	# trust-dns

site/static/img/logo.svg: trust-dns
	cp trust-dns/logo.svg $@

.PHONY: logo
logo: site/static/img/logo.svg

.PHONY: site
site: ${SITE_TARGET_DIR} book docs logo
	@echo "=====> site"
	cd ${SITE_DIR} && \
	  zola build --base-path ${SITE_DIR} --output-dir ${SITE_TARGET_DIR}

.PHONY: serve
serve: site
	@echo "=====> serve"
	cd ${SITE_DIR} && \
	  zola serve --base-path ${SITE_DIR} --output-dir ${SITE_TARGET_DIR}

.PHONY: book
book: ${BOOK_TARGET_DIR}
	@echo "=====> book"
	cd ${BOOK_DIR} && \
	  mdbook build --dest-dir ${BOOK_TARGET_DIR} ${BOOK_DIR}

.PHONY: docs
docs: trust-dns ${DOCS_TARGET_DIR}
	@echo "=====> docs"
	cd trust-dns && \
	  cargo doc --all-features --all --no-deps
	
	rm -rf ${DOCS_TARGET_DIR}
	cp -rp ${DOCS_SRC_DIR} ${DOCS_TARGET_DIR}

.PHONY: deploy
deploy: site
	@echo "=====> deploying to github"
	git worktree add ${WORKTREE_DIR} gh-pages
	rm -rf ${WORKTREE_DIR}/*
	cp -rp ${SITE_TARGET_DIR}/* ${WORKTREE_DIR}
	cd ${WORKTREE_DIR} && \
		git add -A && \
		git commit -m "deployed on $(shell date) by ${USER}" && \
		git push origin gh-pages
	git worktree remove ${WORKTREE_DIR}
	git worktree prune

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