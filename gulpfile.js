const gulp = require( 'gulp' );
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

const rename = require('gulp-rename');
const sourcemaps = require( 'gulp-sourcemaps' );
const imagemin = require( 'gulp-imagemin' );
const concat = require( 'gulp-concat' );
 
//gulp.task('default', function () {
//    gulp.src('src/**/*.css')
//        .pipe(cssmin())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('dist'));
//}); 

gulp.task('concat', function() {
   return gulp.src('./src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('imagemin', function () {
  return gulp.src('./src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/img'));
    
});


gulp.task('styles', function () {
  return gulp.src('./src/css/*.css')
//            .pipe( sourcemaps.init() )
            .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe( sourcemaps.write( './' ) )

    .pipe(gulp.dest('./dist/css'))
});