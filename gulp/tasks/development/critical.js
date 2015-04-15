var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var config    = require('../../config').criticalcss;

/**
 * Copy loadCSS to _includes
 */
gulp.task('criticalcss', function() {
  return gulp.src(config.src)
    .pipe(minifycss(config.options))
    .pipe(gulp.dest(config.dest));
});
