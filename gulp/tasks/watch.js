var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

<<<<<<< HEAD
  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scripts');
  });
=======
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })
>>>>>>> js-redo

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

<<<<<<< HEAD
gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
})
=======
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
>>>>>>> js-redo
