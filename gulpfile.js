var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
gulp.task('sass', function () {
    return gulp.src('app/scss/styles.scss').pipe(sass().on('error', sass.logError)).pipe(autoprefixer()).pipe(gulp.dest('app/css')).pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    , })
})
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
});
gulp.task('imagemin', function () {
    gulp.src('app/images/*').pipe(imagemin()).pipe(gulp.dest('app/img'))
});
