var gulp = require('gulp');
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();

//自動リロード
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

//ブラウザリロード
gulp.task('bs-reload', function () {
	browserSync.reload();
});

//sassコンパイル
gulp.task("sass", function() {
	gulp.src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css"))
		.pipe(browser.reload({stream:true}))
});


//ファイル監視
gulp.task('default', ['browser-sync'], function () {
	gulp.watch("./**/*.scss", ['sass']);
	gulp.watch("./**/*.css", ['bs-reload']);
	gulp.watch("./**/*.html", ['bs-reload']);
});
