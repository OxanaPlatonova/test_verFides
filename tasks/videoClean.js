/**
 * Clean video build directory
 */
'use strict';

const gulp = require('gulp');
const del = require('del');

module.exports = function (options) {
  return () => {
    return del([`${options.src}/video/`]);
  };
};