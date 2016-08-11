var gulp = require('gulp');
var eslint = require('gulp-eslint');
var config = require('../../config').eslint;

/**
 * Check JavaScript sytax with eslint
 */
gulp.task('lint:scripts', function() {
  return gulp.src(config.src)
    .pipe(eslint())
    .pipe(eslint.format());
});
