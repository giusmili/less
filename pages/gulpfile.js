var gulp = require('gulp')
var minifyCss = require("gulp-minify-css");
 
// task
gulp.task('minify-css', function () {
    gulp.src('./stylescss/screen.css') // dossier de départ
    .pipe(minifyCss())
    .pipe(gulp.dest('./css-min'));//dossier d'arrivée
});