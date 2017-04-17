# path-prefix

> Create a relative path to a directory

[![Travis](https://img.shields.io/travis/gakimball/path-prefix.svg?maxAge=2592000)](https://travis-ci.org/gakimball/path-prefix) [![npm](https://img.shields.io/npm/v/path-prefix.svg?maxAge=2592000)](https://www.npmjs.com/package/path-prefix)

Returns a string you can append to the beginning of a path to make it relative to another path. See [Example](#example) below for a use case.

## Installation

```bash
npm install path-prefix
```

## Usage

```js
const pathPrefix = require('path-prefix');

const fileA = '/path/to/file.html';
const fileB = '/path/to/subdirectory/file.html';
const root = '/path/to/file';

// No prefix is needed if the file is right inside the root
pathPrefix(fileA, root); // => ''

// If the file is in a different directory, a relative path prefix is made
pathPrefix(fileB, root); // => '../'
```

## Example

Use this if you're generating HTML and need all of your `<link>`, `<img>`, and `<script>` tags to be relative paths.

```js
const pathPrefix = require('path-prefix');

const path = '/src/about/index.html';
const root = '/src';

const link = `<link rel="stylesheet" href="${pathPrefix(path, root)}styles/style.css">`;
// => '<link rel="stylesheet" href="../styles/style.css">'
```

## API

### pathPrefix(file, root)

Create a string that can be prepended to a file path that needs to resolve to a root directory.

- **file** (String): Path to the file.
- **root** (String): Path to the root directory.

Returns an empty string if the file is at the root, or a series of `../` characters if the file is in a subdirectory relative to the root.

## Local Development

```bash
git clone https://github.com/gakimball/path-prefix
cd path-prefix
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
