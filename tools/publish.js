
const path = require('path');
const firebase = require('firebase-tools');
const build = require('./build');
const task = require('./task');
const config = require('./config');
const s3 = require('../src/helpers/s3');

global.DEBUG = process.argv.includes('--debug') || false;

// Build and deploy the app to Firebase
module.exports = task('deploy', () => Promise.resolve()
  .then(() => build())
  .then(() => new Promise((resolve, reject) => {



  }))
  .then(() => { setTimeout(() => process.exit()); }));



