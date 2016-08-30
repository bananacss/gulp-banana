'use strict';

const through = require('through2');
const PluginError = require('gulp-util').PluginError;
const replaceExt = require('replace-ext');

const pluginName = 'gulp-banana';

module.exports = (opts = {}) => {

  return through.obj((file, enc, cb) => {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new PluginError(pluginName, 'Streams not supported!'));
    }

    const config = opts;

    const banana = require('bananacss')(config);

    const renderedContents = banana.render(file.contents.toString(), file.path);

    file.path = replaceExt(file.path, '.css');
    file.contents = new Buffer(renderedContents);

    cb(null, file);

  });

};
