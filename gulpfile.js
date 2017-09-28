var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var webserver = require('gulp-webserver');
 
var paths = {
  scripts: './js/*.js'
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del(['build']);
});
 
gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())      
      .pipe(uglify())
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,      
      open: false,
			port: 8800
    }));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']); 
});

 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'scripts', 'webserver']);