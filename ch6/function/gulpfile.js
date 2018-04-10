'use strict';

var tslintStylish = require('tslint-stylish');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('default', ['tslint']);
gulp.task('tslint', function () {
    return gulp
        .src("./src/basic/max-no-types.ts")
        .pipe($.tslint())
        .pipe($.tslint.report(tslintStylish, {
            emitError: false,
            sort: true,
            bell: false
        }));
});