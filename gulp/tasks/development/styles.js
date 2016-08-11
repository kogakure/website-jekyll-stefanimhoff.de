var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var nano = require('gulp-cssnano');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var browsersync = require('browser-sync');

var easings = require('postcss-easings');
var responsiveType = require('postcss-responsive-type');
var lost = require('lost');
var hexRGBA = require('postcss-hexrgba');
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');

var config = require('../../config');


function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

/**
 * Rund CSS through PostCSS and it's plugins
 * Build sourcemaps
 */
var processors = [
  precss(config.styles.options.precss),
  easings(config.styles.options.easings),
  responsiveType(config.styles.options.responsiveType),
  lost(config.styles.options.lost),
  hexRGBA(config.styles.options.hexRGBA),
  pxtorem(config.styles.options.pxtorem),
  autoprefixer(config.styles.options.autoprefixer),
  mqpacker(config.styles.options.mqpacker),
];

gulp.task('styles', function() {
  browsersync.notify('Transforming CSS with PostCSS');

  return gulp.src(config.styles.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(nano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest));
});
