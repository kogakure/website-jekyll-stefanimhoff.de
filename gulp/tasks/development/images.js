var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var config = require('../../config').images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
