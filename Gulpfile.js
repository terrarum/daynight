var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// Concatenates vendor js and css files.
gulp.task('lib', function() {
    gulp.src('./src/lib/*.js')
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./build/'))

    gulp.src('./src/lib/*.css')
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('./build/'))
})

// Compiles Jade templates.
gulp.task('jade', function() {
    gulp.src('./src/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./build/'))
});

// Compiles and concatenates Coffeescript files.
gulp.task('js', function() {
    gulp.src('./src/*.coffee')
        .pipe(coffee({bare: true}))

        .pipe(concat('src.js'))
        .pipe(gulp.dest('./build/'))
});

// Compiles and concatenates SCSS.
gulp.task('scss', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/'))
});

// Watch task.
gulp.task('watch', function() {
    gulp.watch('src/*.coffee', ['js']);
    gulp.watch('src/scss/*.scss', ['scss']);
    gulp.watch('src/*.jade', ['jade']);
});

// Default task. Runs watch.
gulp.task('default', ['watch', 'lib', 'coffee', 'scss', 'jade']);