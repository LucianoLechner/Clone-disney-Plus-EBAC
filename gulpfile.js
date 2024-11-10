const gulp = require('gulp');
const sass = require('sass'); // Importando o módulo sass
const gulpSass = require('gulp-sass')(sass); // Passando o sass para o gulp-sass
const imagemin = require('gulp-imagemin')

function Styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(gulpSass({ outputStyle: 'compressed' })) // Usando gulpSass para compilar o Sass
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin()) // Usando gulpSass para compilar o Sass
        .pipe(gulp.dest('./dist/imagens'));
}

exports.default = gulp.parallel(Styles, images);


exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(Styles))
}
