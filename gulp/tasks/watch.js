const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', () => {
  browserSync.reload();
});

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scripts');
  });

});

gulp.task('cssInject', ['styles'], () => {
  gulp.src('./app/temp/styles/main.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
})
