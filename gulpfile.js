var gulp = require('gulp'); 
var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');
 
gulp.task('compileSass', function () {
    gulp.src('./assets/sass/*.scss')
        .pipe(scssPlugin().on('error', scssPlugin.logError))
        .pipe(gulp.dest('./assets/css'))
        .pipe(connect.reload());
});

gulp.task('reloadPage',function(){
    gulp.src('assets/html/*.html')
        .pipe(connect.reload());
})

gulp.task('connect', function() {
    connect.server({
        port: 8888,
        livereload: true
    });
});

gulp.task('watchAssets', function() {
    gulp.watch('assets/sass/*.scss', ['compileSass']);
    gulp.watch(['assets/html/*.html','assets/css/*.css'], ['reloadPage']);
});

gulp.task('default', ['watchAssets','connect']);
