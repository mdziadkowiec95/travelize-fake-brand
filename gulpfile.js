const gulp = require( 'gulp' );
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sourcemaps = require( 'gulp-sourcemaps' );
 
gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
}); 


gulp.task('styles', function () {
  return gulp.src('./src/css/style.css')
            .pipe( sourcemaps.init() )
            .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe( sourcemaps.write( './' ) )

    .pipe(gulp.dest('./dist/css'))
});