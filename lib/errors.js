'use strict';

var spec = {
  name: 'Contracts',
  message: 'Internal Error on bitcore-contracts Module {0}',
};

module.exports = require('bitcore').errors.extend(spec);
