var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Generate production build, sync to server and open browser
 */
gulp.task('publish', function(callback) {
  runSequence('production:build', 'rsync', 'open-browser', callback);
});
