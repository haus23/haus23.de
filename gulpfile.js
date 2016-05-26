
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// NPM dependencies
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

// Paths
var webroot = './www.haus23.de';

var paths = {
    src: {
        js:   './app/client/scripts',
        twig: './app/views'
    },
    dst: {
        js:  webroot + '/js',
        css: webroot + '/css'
    }
}

// Tasks

gulp.task('default',['vendors','inject']);

// Browserify the vendor scripts
gulp.task('vendors',function () {
    return browserify(paths.src.js + '/vendors.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.dst.js));
});

// Inject generated styles and scripts
gulp.task('inject',function () {
    
    var target  = gulp.src( paths.src.twig + '/index.html.twig');
    var sources = gulp.src( [paths.dst.js + '/**/*.js', paths.dst.css + '/**/*.css'], {read: false});

    return target.pipe($.inject(sources, {ignorePath: '/www.haus23.de'}))
        .pipe(gulp.dest(paths.src.twig));
});
