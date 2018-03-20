var gulp =require('gulp');
var browserSync =require('browser-sync');

gulp.task('browserSync',function(){
    browserSync({
        server:{
            baseDir:"app",
            index:'test/flex.html'
        },
        port:12345

    })
})
gulp.task('watch',['browserSync'],function(){
    gulp.watch('app/**/*.css',browserSync.reload);
    gulp.watch('app/**/*.html',browserSync.reload);
    gulp.watch('app/**/*.js',browserSync.reload);
})