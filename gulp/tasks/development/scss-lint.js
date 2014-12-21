var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../../config').scsslint;

/**
 * Lint SCSS files
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint());
});
