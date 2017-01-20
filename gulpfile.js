  // Общие
var gulp = require('gulp');

  // css
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gMedia = require('gulp-group-css-media-queries');
var rename = require('gulp-rename');
var csscomb = require('gulp-csscomb');

  // img
var imagemin = require('gulp-imagemin');

  // html
var htmlmin = require('gulp-htmlmin');  

  // js
var jsmin = require('gulp-jsmin');


//-- Сборка проекта

gulp.task('build', function() {
  
  //css
  gulp.src('src/less/style.less')
  
  .pipe(less())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie 10'],
    cascade: false
  }))
  .pipe(gMedia())
  .pipe(cleanCSS({compatibility: 'ie9', debug: true}, function(details) {
    console.log(details.name + ' before' + ': ' + details.stats.originalSize + 'B');
    console.log(details.name + ' after' + ': ' + details.stats.minifiedSize + 'B');
  }))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('build/css'));
  
  // img
  gulp.src('src/img/**/*')
  
  .pipe(imagemin())
  .pipe(gulp.dest('build/img'));
  
  // photos
  gulp.src('src/photos/**/*')
  
  .pipe(imagemin())
  .pipe(gulp.dest('build/photos'));
  
  //html
  gulp.src('src/*.html')
  
  .pipe(htmlmin({
    removeComments: true,
    //collapseWhitespace: true,
    collapseBooleanAttributes: true,
    caseSensitive: true,
    keepClosingSlash: false
  }))
  
  .pipe(gulp.dest('build'));
  
  gulp.src('src/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('build/js'));
});


//-- Стилизация CSS

gulp.task('style', function() {
  gulp.src('src/less/**/*.less')
  
  .pipe(csscomb())
  .pipe(gulp.dest('src/less'));
});

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