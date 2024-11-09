const gulp = require('gulp');
const sass = require('sass'); // Importando o módulo sass
const gulpSass = require('gulp-sass')(sass); // Passando o sass para o gulp-sass

function Styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(gulpSass({ outputStyle: 'compressed' })) // Usando gulpSass para compilar o Sass
        .pipe(gulp.dest('./dist/css'));
}

exports.default = Styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(Styles))
}
