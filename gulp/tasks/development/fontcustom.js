var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('fontcustom', shell.task([
  'bundle exec fontcustom compile'
]));
