var gulp       	 = require('gulp'),
	sass		 = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync  = require('browser-sync');


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

// gulp.task('sass:watch', function(){
// 	gulp.watch('./www/app/sass/**/*.scss', ['sass']);
// });

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	// gulp.watch('./www/app/js/**/*.html', browserSync.reload);
});

