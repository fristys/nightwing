# Nightwing v2

=========

The most versatile Grid System on the Net reimagined.

Back in 2013, I had a dire need for a quick and easy-to-use CSS grid for rapid prototyping and professonal work, thus Nightwing was born. It was based on Boostrap's grid system, developed to essentially be a direct replacement of it.

Obviously, a lot of things have changed since 2013 technology and best-practices wise, yet, the need for a simple CSS grid (based on modern tech) remains, thus Nightwing v2 was built, based on flexbox.

Nightwing is a 12 _(or however many you want, just change the variable)_ column grid system with an adaptable container width. From completely fluid (100% viewport) container size, to popular grid sizes (960px, 1020px 1140px) to your own custom container width size.

The choice is entirely yours.

## Usage

Download the latest `.css` file from `dist` and link it in your page.

There is no need for a container element. Simply add rows via the `.nw-row` class and populate them with elements with a class of `.nw-col-<1 to 12>` or `.nw-col-<sm|md|lg|xl>-<1 to 12>`. Simple, quick, and painless.

Additionally, there are helper classes you can find more about by reading `_variables.scss`.

## Development

### Local Installation

Clone this repository and run

```bash
yarn install
```

### Watch

```bash
yarn start
```

### Build

```bash
yarn run build
```

## Contributing

All sorts of contributions and suggestions are welcome in this mini project. Feel free to open an issue or create a pull request at any time.
