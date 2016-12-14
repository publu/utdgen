'use strict'
 
var fs = require('fs');
var gulp = require('gulp')
var GulpSSH = require('gulp-ssh')

var replace = require('gulp-string-replace');

var run = require('gulp-run');

require('dotenv').config();
 
var config = {
  host: 'giant.utdallas.edu',
  port: 22,
  username: process.env.UTD_ID,
  password: process.env.UTD_PASS
}
 
var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('upload', function () {
  return gulp
    .src(['static/**/**'])
    .pipe(gulpSSH.dest('public_html/'))
})

gulp.task('generate', function() {
  return run('python buster/buster/buster.py generate').exec()    // prints "Hello World\n". 
    .pipe(gulp.dest(''))      // writes "Hello World\n" to output/echo. 
  ;
})

gulp.task('replace_links', function() {
  gulp.src(['static/**/**']) // Every file allown.
    .pipe(replace('http://localhost:2368/', 'http://www.utdallas.edu/~' + process.env.UTD_ID +'/')) 
    .pipe(gulp.dest('static'))
});

gulp.task('deploy', ['generate', 'replace_links', 'upload']);
