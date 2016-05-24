 var gulp = require('gulp');
 var jshint = require('gulp-jshint');
 var wiredep = require('wiredep').stream;
 var inject = require('gulp-inject');
 var nodemon = require('gulp-nodemon');
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
 	var checkHtml = './src/view/*.ejs';
 	var destHtml = './src/view';
 	var bowerOptions = {
 		bowerJson: require('./bower.json'),
 		directory: './public/lib',
 		ignorePath: '../../public'
 	};
 	var ourCssJs = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
 	var ourOptions = { ignorePath: '/public'};
 	return gulp.src(checkHtml)
 	.pipe(wiredep(bowerOptions))
 	.pipe(inject(ourCssJs,ourOptions))
 	.pipe(gulp.dest(destHtml));

 });

 gulp.task('doneall', ['style','update'], function() {
 	var options = {
 		script:'app.js',
 		delayTime:1,
 		env: {
 			'PORT': 5000
	 	},
	watch: checkJs
	};

	return nodemon(options)
	.on('return', function(env) {
		console.log('restarting server......');

	});
});
