var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../../config').loadcss;

/**
 * Copy loadCSS to _includes
 */
gulp.task('loadcss', function() {
  return gulp.src(config.src)
    .pipe(uglify(config.options))
    .pipe(gulp.dest(config.dest));
});
