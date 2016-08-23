var gulp = require('gulp'),
    connect = require('gulp-connect'),
    proxy = require('http-proxy-middleware'),
    open = require('gulp-open');

module.exports = function (meta) {
    gulp.task('serve', ['watch'], function () {
        var options = {
            url: 'http://localhost:' + meta.serve.port.toString()
        };
        gulp.src('app/index.html')
            .pipe(open('', options));

        connect.server({
            livereload: true,
            root: ['app', 'app/.build'],
            port: meta.serve.port,
            middleware: function (connect, opt) {
                return [
                    proxy('/api', {
                        target: 'http://10.0.75.1:8080',
                        pathRewrite: {
                            '^/api': '/v1'
                        },
                        changeOrigin: true,
                    })
                ];
            }
        });

        var distpaths = [
            'app/.build/**/*',
        ];
        gulp.watch(distpaths, function () {
            gulp.src(distpaths).pipe(connect.reload());
        });
    });
};