module.exports = {
  plugins: [
    'prettier-plugin-css-order',
    'prettier-plugin-import-sort',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
    'prettier-plugin-style-order',
    'prettier-plugin-tailwindcss', // must be last
  ],
  pluginSearchDirs: false,
  tailwindConfig: './tailwind.config.js',
  singleQuote: true,
};
