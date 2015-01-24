var gulp        = require('gulp'),
    svgstore    = require('gulp-svgstore'),
    svgo        = require('gulp-svgo'),
    svgOpts     = {
        fileName: 'icons.svg',
        prefix: 'svg-'
    }

gulp.task('default', function() {
    gulp.src('./svg-src/*.svg')
        .pipe(svgo())
        .pipe(svgstore(svgOpts))
        .pipe(gulp.dest('./app/static/img'))
});