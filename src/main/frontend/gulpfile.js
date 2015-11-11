var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
 
gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./app/main.jsx'],
        transform: [reactify], 
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    bundler
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./build/js/'));

});
    
gulp.task('css', function () {
    gulp
        .src('styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('html', function() {
    gulp
        .src(['index.html'])
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['browserify', 'css', 'html']);