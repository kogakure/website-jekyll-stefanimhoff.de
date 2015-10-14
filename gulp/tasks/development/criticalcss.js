var gulp      = require('gulp');
var config    = require('../../config').criticalcss;

/**
 * Copy loadCSS to _includes
 */
gulp.task('criticalcss', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
