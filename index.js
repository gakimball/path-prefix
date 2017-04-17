'use strict';

const path = require('path');
const slash = require('slash');

/**
 * Create a string that can be prepended to a file path that needs to resolve to a root directory.
 * @param {string} filePath - Path to the file.
 * @param {string} rootDir - Path to the root directory.
 * @returns {string} An empty string if the file is at the root, or a series of `../` characters if the file is in a subdirectory relative to the root.
 */
module.exports = function(filePath, rootDir) {
  const fileDir = path.dirname(filePath);

  let relativePath = path.relative(fileDir, rootDir);

  if (relativePath.length > 0) {
    relativePath += '/';
  }

  // On Windows, paths are separated with a "\"
  // However, web browsers use "/" no matter the platform
  return slash(relativePath);
};
