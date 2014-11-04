// Gulp file (Task runner)
// Usage: You can use the taks individually, like this: gulp taskname

// Require modules
var gulp         = require('gulp'),
	  less         = require('gulp-less'),
    source       = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minify       = require('gulp-minify-css'),
    connect      = require('gulp-connect');

/* Server Taks
 * Running a local server
*/

gulp.task('server', function() {
  connect.server({
    port: 3000
  });
});



/* Styles tasks
 * @description Compile all .less styles, minify,
 *  generate sourcemaps and will be autoprefixed.
*/

gulp.task('styles', function() {
  // We just use main.less because we import other .less
  // files with LESS @import
  return gulp.src('css/less/main.less')
    .pipe(less())
    .pipe(source.init())
    .pipe(autoprefixer('last 2 version', 'ie 10', 'android 4', 'safari 5'))
    .pipe(minify())
    .pipe(source.write('css/maps/'))
    .pipe(gulp.dest('css/'));
});


/* Watch taks
 * @description Watch files, when have any edition run some task
*/

gulp.task('watch', function() {
  gulp.watch('css/less/*.less', ['styles']);
});

/* Default tasks
 * @description Here we can run multiple tasks at same time
 */

gulp.task('default', ['server', 'watch']);
