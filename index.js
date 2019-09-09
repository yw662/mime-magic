'use strict';

const mime = require('mime');
const {exec} = require('child_process');

module.exports = (path, cb) => {
  exec('file -bE --mime-type ' + path, (e, o) => {
    o = o.trim();
    if (e
        || o === 'text/plain'
        || o === 'application/octet-stream') {
      setImmediate(cb, mime.getType(path));
    } else {
      setImmediate(cb, o);
    }
  });
};
