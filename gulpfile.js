
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
        css:  './app/client/styles',
        twig: './app/views'
    },
    dst: {
        js:  webroot + '/assets/js',
        css: webroot + '/assets/css'
    }
}

// Tasks

gulp.task('default',['vendors','inject']);

// Handle the vendor assets
gulp.task('vendors',['vendor:scripts','vendor:styles']);

// Handle the app assets
gulp.task('build', ['scripts','styles']);

// Compile the vendor styles
gulp.task('vendor:styles',function () {
    return gulp.src(paths.src.css + '/vendors.scss')
        .pipe($.sass())
        .pipe(gulp.dest(paths.dst.css));
});

// Compile the app styles
gulp.task('styles',function () {
    return gulp.src(paths.src.css + '/app.scss')
        .pipe($.sass())
        .pipe(gulp.dest(paths.dst.css));
});

// Browserify the vendor scripts
gulp.task('vendor:scripts',function () {
    return browserify(paths.src.js + '/vendors.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.dst.js));
});

// Browserify the app scripts
gulp.task('scripts',function () {
    return browserify(paths.src.js + '/tg-shoutbox.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(paths.dst.js));
});

// Inject generated styles and scripts
gulp.task('inject',['vendors','build'], function () {
    
    var target  = gulp.src( paths.src.twig + '/index.html.twig');
    var sources = gulp.src( [paths.dst.js + '/**/*.js', paths.dst.css + '/**/*.css'], {read: false});

    return target.pipe($.inject(sources, {ignorePath: '/www.haus23.de'}))
        .pipe(gulp.dest(paths.src.twig));
});
