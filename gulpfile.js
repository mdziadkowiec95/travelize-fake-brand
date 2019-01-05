const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

//gulp.task('default', function () {
//    gulp.src('src/**/*.css')
//        .pipe(cssmin())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('dist'));
//});

gulp.task('build-fonts', function() {
  gulp
    .src('./src/fonts/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('build-html', function() {
  gulp
    .src('./src/index.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-scripts', function() {
  return (
    gulp
      .src('./src/js/**/*.js')
      // .pipe(concat('script.js'))
      .pipe(gulp.dest('./dist/js'))
  );
});

gulp.task('imagemin', function() {
  return gulp
    .src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('build-styles', function() {
  return (
    gulp
      .src('./src/css/*.css')
      //            .pipe( sourcemaps.init() )
      .pipe(
        autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        })
      )
      .pipe(cssmin())
      //   .pipe(rename({ suffix: '.min' }))
      //   .pipe(sourcemaps.write('./'))

      .pipe(gulp.dest('./dist/css'))
  );
});

gulp.task('build-clean', function() {
  // Return the Promise from del()
  return del('dist');
  //  ^^^^^^
  //   This is the key here, to make sure asynchronous tasks are done!
});

gulp.task('build', function(callback) {
  runSequence(
    'build-clean',
    ['build-styles', 'build-scripts', 'build-fonts', 'imagemin'],
    'build-html',
    callback
  );
});

var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');

/** Configuration **/
var user = process.env.FTP_USER;
var password = process.env.FTP_PWD;
var host = 'ftp.hrmdrum.vot.pl';
var port = 21;
var localFilesGlob = ['dist/**/*'];
var remoteFolder = '/domains/michaldziadkowiec.pl/public_html/travelize';

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
  return ftp.create({
    host: host,
    port: port,
    user: user,
    password: password,
    parallel: 5,
    log: gutil.log
  });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {
  var conn = getFtpConnection();

  return gulp
    .src(localFilesGlob, { base: './dist', buffer: false })
    .pipe(conn.newer(remoteFolder)) // only upload newer files
    .pipe(conn.dest(remoteFolder));
});

/**
 * Watch deploy task.
 * Watches the local copy for changes and copies the new files to the server whenever an update is detected
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy-watch`
 */
gulp.task('ftp-deploy-watch', function() {
  var conn = getFtpConnection();

  gulp.watch(localFilesGlob).on('change', function(event) {
    console.log(
      'Changes detected! Uploading file "' + event.path + '", ' + event.type
    );

    return gulp
      .src([event.path], { base: './dist', buffer: false })
      .pipe(conn.newer(remoteFolder)) // only upload newer files
      .pipe(conn.dest(remoteFolder));
  });
});

// FTP_USER=someuser FTP_PWD=somepwd
