// Copyright 2015 Unreal

/**
 * @fileoverview Public interface for packaged files.
 */

exports.dirname = __dirname

/**
 * Loads closure-library in the global scope.
 */
exports.bootstrap = function () {
  require('./closure/goog/bootstrap/nodejs')
}
