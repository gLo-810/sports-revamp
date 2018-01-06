const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
  console.log('task!!!!');
});

gulp.task('html', () => {
  console.log('HTML TASK!!!');
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });
});
