var gulp = require("gulp");
var sass = require("gulp-sass");

//sassコンパイル
gulp.task("sass", function() {
	gulp.src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css"));
});

//自動タスク
gulp.task('default', function() {
	gulp.watch('./sass/**/*.scss',['sass'])
});
