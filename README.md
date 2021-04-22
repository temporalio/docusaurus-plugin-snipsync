# docusaurus-plugin-snipsync

Integrates snipsync into the docusaurus build process.

## Installation

In the same directory as your docusaurus installation run:

```shell
npm install docusaurus-plugin-snipsync
```

-- Or --

```shell
yarn add docusaurus-plugin-snipsync
```

## Usage

Add the plugin to the list of plugins in your `docusaurus.config.js`

```js
module.exports = {
  // ...
  plugins: [
    [
      'docusaurus-plugin-snipsync',
      {
        origins: [
          {
            files: ['../*/src/*.ts', '../create-project/samples/*.ts'],
          },
        ],
        target: 'docs',
        features: {
          enable_source_link: false,
        },
      },
    ],
  ],
};
```
