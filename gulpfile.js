var gulp = require( 'gulp' );

gulp.task('styles', function () {
  return gulp.src('./src/css/style.css')
    // Auto-prefix css styles for cross browser compatibility
  //  .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
   // .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/css'))
});