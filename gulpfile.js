const gulp = require('gulp'),
     concat = require('gulp-concat'),
     autoprefixer = require('gulp-autoprefixer'),
     cleanCSS = require('gulp-clean-css'),
     uglify = require('gulp-uglify-es').default,
     imagemin = require('gulp-imagemin');

const cssFiles = [
    '.src/css/animate.min.css',
    '.src/css/bootstrap.min.css',
    '.src/css/main.css'
];
const jsFiles = [
    '.src/js/jquery.maskedinput.min.js',
    '.src/js/mask.js',
    '.src/js/moduleWin.js',
    '.src/js/burgerShow.js',
    '.src/js/slowjakor.js',
    '.src/js/initMap.js',
    '.src/js/senseiSwap.js',
    '.src/js/menuAdaptive.js'
];
function styles() {
    return gulp.src('./src/**/*.css')
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'));
}
function scripts() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'));
}
function images(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
}

gulp.task('styles',styles);
gulp.task('scripts',scripts);
gulp.task('images', images);