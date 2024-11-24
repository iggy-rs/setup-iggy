# GitHub Action: `setup-iggy`

<p>
  <a href="https://github.com/iggy-rs/setup-iggy/releases"><img alt="Latest release" src="https://img.shields.io/github/v/release/Tchoupinax/setup-iggy"></a>
</p>

## Usage

```yaml
name: Test with Iggy server
on:
  push:
jobs:
  tests-iggy:
    name: Test setup-iggy
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup iggy
        uses: "./"
        with:
          version: "0.4.71"
      - name: Print iggy version
        run: iggy-server --version
```