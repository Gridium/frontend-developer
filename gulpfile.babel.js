'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';
import pug from 'gulp-pug';
import webpack from 'webpack-stream';

const dirs = {
  src: 'source',
  dest: 'dist',
  nodeDir: 'node_modules' 
};

const paths = {
  sass: `${dirs.src}/style/**/*.scss`,
  pug: `${dirs.src}/pug/**`,
  js: `${dirs.src}/app/**`,
  babel: `${dirs.src}/app/**/*`
};

gulp.task('clean', () => {
  return del([`${dirs.dest}`]);
});

//VENDOR SPECIFIC
/**************************/

gulp.task('bootstrap-fonts', () => { 
    return gulp.src(`${dirs.nodeDir}/bootstrap/dist/fonts/**`) 
        .pipe(gulp.dest(`${dirs.dest}/fonts`)); 
});

/*************************/
//END VENDOR SPECIFIC

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(`${dirs.dest}/css`));
});

gulp.task('pug', () => {
  return gulp.src([`${paths.pug}/*.pug`, `!${paths.pug}/_includes/*`, `!${paths.pug}/_extends/*`, `!${paths.pug}/_components/*` ])
  .pipe(pug({})).pipe(gulp.dest(`${dirs.dest}`));
});

gulp.task('webpack', () => {
  return gulp.src(`${paths.js}/app/index.jsx`)
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(`${paths.dest}/js/app.js`));
});

gulp.task('sass:watch', () => {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('pug:watch', () => {
  gulp.watch(paths.pug, ['pug']);
});

gulp.task('webpack:watch', () => {
  gulp.watch(paths.js, ['webpack']);
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.pug, ['pug']);
  gulp.watch(paths.js, ['webpack']);
});

gulp.task('build', ['bootstrap-fonts','sass','pug','webpack']);

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
