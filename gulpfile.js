 var gulp = require('gulp');
 var jshint = require('gulp-jshint');
 var wiredep = require('wiredep').stream;
 var inject = require('gulp-inject');
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
 		directory: './public/lib',
 		ignorePath: '../../public'
 	}
 	var ourCssJs = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
 	var ourOptions = { ignorePath: '/public'}
 	return gulp.src(checkHtml)
 	.pipe(wiredep(bowerOptions))
 	.pipe(inject(ourCssJs,ourOptions))
 	.pipe(gulp.dest(destHtml));

 });