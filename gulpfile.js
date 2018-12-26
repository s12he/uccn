const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');
const imgmin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const connect = require('gulp-connect');
const open = require('gulp-open');
const os = require('os');

const HOST_NAME = 'localhost';
const HOST_PORT = '8080';
const HOST_ROOT = 'dist';

let path = {
	cssPath: ['./src/**/**/*.css'],
	htmlPath: ['./src/**/**/*.html'],
	imgPath: ['./src/**/images/**/*.{png, jpg, gif, ico}'],
	jsPath: ['./src/**/**/*.js'],
	iconPath: ['./src/**/**/*.{eot, svg, ttf, woff}'],
	copyPath: ['./src/**/*.ico', './src/**/images/**/*.gif}']
}

//压缩js
gulp.task('babel',() => {
    return gulp.src(path.jsPath)
        //js压缩
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});
//图片压缩
gulp.task('imagemin', function () {
    return gulp.src(path.imgPath)
        .pipe(imgmin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

// css压缩
gulp.task('cssmin', function() {
	return gulp.src(path.cssPath)
		.pipe(minifycss())
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

// html模块化以及压缩
gulp.task('prew', function () {
 	return gulp.src(path.htmlPath)
  		.pipe(fileinclude({
	   		prefix: '@@',
	   		basepath: '@file'
	  	}))
	  	.pipe(htmlmin({
	  	    removeComments: true,//清除HTML注释
	  	    collapseWhitespace: true,//压缩HTML
	  	    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
	  	    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
	  	    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	  	    minifyJS: true,//压缩页面JS
	  	    minifyCSS: true//压缩页面CSS
	  	}))
  		.pipe(gulp.dest('./dist'))
	  	.pipe(connect.reload());
});

// 图标复制
gulp.task('copy', function() {
	return gulp.src(path.copyPath)
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});


var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

//使用connect启动一个Web服务器,在浏览器里默认从localhost:8080/进入
gulp.task('connect', function() {
	connect.server({
		root: HOST_ROOT,
		hostname: HOST_NAME,
		port: HOST_PORT,
		livereload: true
	});
	const url = 'http://' + HOST_NAME + ':' + HOST_PORT + '/page/index/index.html';
	return gulp.src('./gulpfile.js')
		.pipe(open({
		  	uri: url,
		  	app: browser,
	  	}));
});

//监听当前所有任务
gulp.task('watchPrew', function(done) {
	//当js文件被修改的时候自动转译同步
	gulp.watch(path.jsPath, gulp.series('babel'));
  	//当html修改的时候模块化以及压缩
	gulp.watch(path.htmlPath, gulp.series('prew'));
	//当css修改的时候自动压缩同步
	gulp.watch(path.cssPath, gulp.series('cssmin'));
	//当图片修改的时候自动压缩同步
	gulp.watch(path.imgPath, gulp.series('imagemin'));
	//字体图标改变时自动复制
	gulp.watch(path.iconPath, gulp.series('copy'));
	done();
});


gulp.task('default', gulp.series('prew', 'babel', 'cssmin', 'imagemin', 'copy', 'watchPrew','connect', function(done) {
	done();
}));
