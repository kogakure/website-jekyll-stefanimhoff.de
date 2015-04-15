var gulp   = require('gulp');
var cmq    = require('gulp-combine-media-queries');
var config = require('../../config').combinemediaqueries;

/**
 * Combine Media Queries
 */
gulp.task('combine:mediaqueries', function () {
  gulp.src(config.src)
    .pipe(cmq(config.options))
    .pipe(gulp.dest(config.dest));
});
