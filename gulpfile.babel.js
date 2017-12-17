import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import path from 'path'
import { exec } from 'child_process'
import through from 'through2';

const mjmlCompile = () => through.obj((file, encoding, callback) => {
  const compile = (filename) => {
    const dest = filename.replace('/src/', '/build/');
    exec('mkdir ./build/emails');
    exec(
      `${path.normalize('./node_modules/.bin/mjml')} ${filename} --output ${dest}`,
      (error, stdout) => {
        stdout && console.log(stdout);
        console.log(`> MJML compiled -> ${file.path.split('/').pop()}`);
      }
    )
  };
  callback(null, compile(file.path));
});

const compile = () => {
  gulp.src(path.normalize('src/components/**.js'))
    .pipe(babel())
    .on('error', gutil.log)
    .pipe(gulp.dest('build/components'))
    .on('end', () => {
      gulp.src(path.normalize('src/emails/**.mjml'))
        .pipe(mjmlCompile());
    })
};

gulp.task('build', compile);

gulp.task('watch', () => {
  compile();
  return watch([
    path.normalize('src/components/**.js'),
    path.normalize('src/emails/**.mjml'),
  ], compile)
});
