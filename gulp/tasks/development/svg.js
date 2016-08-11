var gulp = require('gulp');
var plumber = require('gulp-plumber');
var svgSprite = require('gulp-svg-sprite');
var config = require('../../config').svg;

/**
 * Create SVG sprites from individual SVGs
 *
 * <svg class="…">
 *   <use xlink:href="#arrow-left"></use>
 * </svg>
 */
gulp.task('svg', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(svgSprite(config.options))
    .pipe(gulp.dest(config.dest));
});
