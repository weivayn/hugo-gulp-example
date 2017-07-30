var gulp = require('gulp')
var less = require('gulp-less')

gulp.task('css', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('static/css/'))
})

gulp.task('default', ['css'])
