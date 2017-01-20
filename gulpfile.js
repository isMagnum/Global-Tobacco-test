  // Общие
var gulp = require('gulp');

  // css
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

//-- Автокомпиляция Less

gulp.task('compile', function() {
  gulp.src('src/less/*.less')
  
  .pipe(less())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie 10'],
    cascade: false
  }))
  .pipe(rename({
    extname: ".css"
  }))
  .pipe(gulp.dest('src/css'));
});

gulp.watch('src/less/**/*.less', function(e) {
  gulp.run('compile');
});