var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('production:build', function(callback) {
  runSequence('delete', 'styles', 'criticalcss', [
    'production:jekyll',
    'scripts',
    'images'
  ],
    'base64', [
      'optimize:html',
      'optimize:css',
      'optimize:js',
      'optimize:images'
    ],
    'revision',
    'rev:collect',
    'webp',
    callback);
});
