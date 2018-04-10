tslint-stylish
===================
![Dependencies](https://david-dm.org/adamfitzpatrick/tslint-stylish.svg)
![Build Status](https://travis-ci.org/adamfitzpatrick/tslint-stylish.svg?branch=master)

This package has been deprecated.  The folks over at Palantir have added a stylish formatter to the list of core
formatters for tslint which provides essentially the same output as this one.  This formatter can be implemented
easily using the original tslint package, as well as gulp-tslint, grunt-tslint and webpack.

To everyone who downloaded this package: This was my first attempt at an npm package as a brand new software developer.
Thank you for downloading this package and gulp-tslint-stylish more than 215,000 times - more than I ever imagined
possible.

Typescript lint reporter for tslint and gulp-tslint along the lines of jshint-stylish.

Thank you to
[Sindre Sorhus](https://github.com/sindresorhus) for the reporter design, and to
[Panu Horsmalahti](https://github.com/panuhorsmalahti) for creating
[gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint).

Installation
------------
Note that this is designed to accept output from tslint and gulp-tslint, which must be installed separately.
To install this package:

```
npm install tslint-stylish
```

Usage
-----
Tslint

- Install Tslint & tslint-stylish:

```
npm install tslint
npm install tslint-stylish
```

- Apply as named formatter:

```
tslint <path/to/target/files> -s node_modules/tslint-stylish -t stylish
```


Gulp

```
var gulp = require('gulp');
var tslint = require('gulp-tslint');
var stylish = require('tslint-stylish');

gulp.task('lint', function () {
    gulp.src('SourceFiles.ts')
      .pipe(tslint())
      .pipe(tslint.report(stylish, {
        emitError: false,
        sort: true,
        bell: true
      }));
```

Options
-------
- `sort`
	- Default is `true`
	- When true, failures are sorted by line number.
- `bell`
    - Default is `true`
    - When true, emits the system bell with report.
- `fullPath`
    - Default is `true`
    - When true, full path to file is included with report.  When false, only the filename is included.
    - Contribution courtesy of [Sagar Vadodaria](https://github.com/sagarvadodaria)
