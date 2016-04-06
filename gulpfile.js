var gulp = require('gulp'),
	watchPath = require('gulp-watch-path'),
    uglify = require('gulp-uglify'),
 	gutil = require('gulp-util'),
	minifycss = require('gulp-minify-css'),
    less = require('gulp-less'),
    babel = require('gulp-babel');
    sass  =require('gulp-sass');
gulp.task('watchjs',function () {
    gulp.watch('src/js/*.js', function (event) {
        var paths = watchPath(event, 'src/js/', 'dist/js/')
  		var paths = watchPath(event,'src/', 'dist/')

        gutil.log(gutil.colors.blue(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)
        gulp.src('src/js/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
        	.pipe(uglify())
        	.pipe(gulp.dest('dist/js'));
        
    })
})
gulp.task('watchhtml', function () {
    gulp.watch('src/*.html', function (event) {
        var paths = watchPath(event,'src/', 'dist/')

        gutil.log(gutil.colors.blue(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(gulp.dest(paths.distDir))

    })
})

gulp.task('watchcss',function(){
	gulp.watch('src/css/*.css',function(event){
		var paths = watchPath(event,'src/css','dist/css')
 	gutil.log(gutil.colors.blue(event.type) + ' ' + paths.srcPath)
	gutil.log('Dist ' + paths.distPath)
	
    	gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));

	})
})


gulp.task('watchless',function(){
    gulp.watch('src/css/*.less',function(event){
        var paths = watchPath(event,'src/css','dist/css')
    gutil.log(gutil.colors.blue(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist ' + paths.distPath)
    gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));

    })
})

gulp.task('watchsass',function(){
    gulp.watch('src/css/*.scss',function(event){
        var paths = watchPath(event,'src/css','dist/css')
    gutil.log(gutil.colors.blue(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist ' + paths.distPath)
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));

    })
})






gulp.task('default',['watchjs','watchhtml','watchcss','watchless','watchsass'])