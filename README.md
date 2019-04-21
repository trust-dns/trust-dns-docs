# trust-dns-docs

Documentation for the [Trust-DNS](https://github.com/bluejekyll/trust-dns) project.

## Layout of the documentation

- `site` - the base site for hosting the documentation, built with Zola
- `book` - an mdbook that contains the documentation for the site
- `docs` - the current master branch of trust-dns produced for ease of access

## Contributing

Please feel free to open a PR against this project for helping support the Trust-DNS community. No change is too small!

## Building the site

The Makefile has targets to support building and viewing the site. The Rust toolchain is required to build the trust-dns docs. `make serve` will build and host the site locally.