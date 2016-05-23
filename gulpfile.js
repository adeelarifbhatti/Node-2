 var gulp = require('gulp');
 var jshint = require('gulp-jshint');
 var wiredep = require('wiredep').stream;
 //var jscs = require('gulp-jscs');

 var checkJs = ['*.js','/src/lib/*.js'];
 gulp.task('style', function() {
 	gulp.src(checkJs)
 	.pipe(jshint())
 	.pipe(jshint.reporter('jshint-stylish', {
 		verbose: true
 	}));
 	//.pipe(jscs());

  });

 gulp.task('update', function() {
 	var checkHtml = './src/view/*.html';
 	var destHtml = './src/view';
 	var bowerOptions = {
 		bowerJson: require('./bower.json'),
 		directory: './public/lib'
 	}
 	return gulp.src(checkHtml)
 	.pipe(wiredep(bowerOptions))
 	.pipe(gulp.dest(destHtml));

 });