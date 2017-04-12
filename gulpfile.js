var gulp   = require( 'gulp' );
var concat = require( 'gulp-concat' );

gulp.task( 'default', [ 'scripts' ] );

gulp.task( 'scripts', function() {

    return gulp.src( './scripts/*.js' )
        .pipe( concat( 'app.js' ) )
        .pipe( gulp.dest( './' ) )
});
