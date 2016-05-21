 var gulp = require('gulp');
 var jshint = require('gulp-jshint');
 //var jscs = require('gulp-jscs');

 var checkFiles = ['*.js','/src/lib/*.js'];
 gulp.task('style', function() {
 	gulp.src(checkFiles)
 	.pipe(jshint())
 	.pipe(jshint.reporter('jshint-stylish', {
 		verbose: true
 	}));
 	//.pipe(jscs());

  });