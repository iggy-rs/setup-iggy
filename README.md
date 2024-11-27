# `@iggy-rs/setup-iggy`

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
        uses: iggy-rs/setup-iggy@v1
        with:
          version: "0.4.72"
      - name: Print iggy version
        run: iggy-server --version
```

## Contributions

Any pull request is welcome!

### Maintainers

Every pull request should be reviewed and merged. Once it's done, you can trigger a release at any time going to [releases](https://github.com/iggy-rs/setup-iggy/releases). A draft release is created and updated with new pull request. You can `edit` the release, then `publish` it. It will publish the release and create the adapted tag. It's done!
