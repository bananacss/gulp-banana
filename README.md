# gulp-banana

> 🍹 Gulp plugin for compile [Banana code](https://github.com/bananacss/bananacss) to CSS.

[![Build Status](https://travis-ci.org/bananacss/gulp-banana.svg?branch=master)](https://travis-ci.org/bananacss/gulp-banana)
[![Coverage Status](https://coveralls.io/repos/github/bananacss/gulp-banana/badge.svg?branch=master)](https://coveralls.io/github/bananacss/gulp-banana?branch=master)
[![Dependency Status](https://david-dm.org/bananacss/gulp-banana.svg)](https://david-dm.org/bananacss/gulp-banana)
[![devDependency Status](https://david-dm.org/bananacss/gulp-banana/dev-status.svg)](https://david-dm.org/bananacss/gulp-banana#info=devDependencies)
[![npm](https://img.shields.io/npm/v/gulp-banana.svg)](https://www.npmjs.com/package/bananacss)
[![npm](https://img.shields.io/npm/dt/gulp-banana.svg)](https://www.npmjs.com/package/bananacss)

## Install

```
$ npm install gulp-banana --save-dev
```

## Usage

```js
const gulp = require('gulp');
const banana = require('gulp-banana');

gulp.task('banana', () => {
  gulp.src(['src/**.bnn'])
    .pipe(banana())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['banana']);
```

## Options

```js
gulp.task('banana', () => {
  gulp.src(['src/**.bnn'])
    .pipe(banana({
      bnnVariable = true,
      bnnImport = true,
      compress = false
    }))
    .pipe(gulp.dest('dist'));
});
```

*All options have `true` as default value, except the `compress`. [View all](https://github.com/bananacss/bananacss#the-bananafile)*

## Versioning
To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [issues](https://github.com/bananacss/gulp-banana/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/bananacss/gulp-banana/blob/master/CONTRIBUTING.md).

## History
See [Releases](https://github.com/bananacss/gulp-banana/releases) for detailed changelog.

## License
[MIT License](https://github.com/bananacss/gulp-banana/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
