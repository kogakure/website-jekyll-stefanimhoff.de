var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.production;

/**
 * Build the Jekyll Site
 */
gulp.task('production:jekyll', function(done) {
  browsersync.notify('Compiling Jekyll (Production)');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
