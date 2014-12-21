var gulp   = require('gulp');
var csscss = require('gulp-csscss');
var config = require('../../config').css;

/**
 * Check CSS syntax with CSSCSS
 * `gem install csscss` needed
 */
gulp.task('csscss', function() {
  return gulp.src(config.src)
    .pipe(csscss());
})
