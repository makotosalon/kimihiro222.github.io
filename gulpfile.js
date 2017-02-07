var gulp = require("gulp");
var sass = require("gulp-sass");
var browser = require("browser-sync");

//自動リロード
gulp.task("server", function() {
	browser({
		server: {
			baseDir: "./"
		}
	});
});

//sassコンパイル
gulp.task("sass", function() {
	gulp.src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css"))
		.pipe(browser.reload({stream:true}))
});

//自動タスク
gulp.task("default",['server'], function() {
	gulp.watch('./sass/**/*.scss',['sass'])
});
