const utils = require('../dist')
const lodash = require('lodash/has')

var object = {
    'a': {
        'b': 2
    }
};

exports['utils'] = () => utils.has(object, 'a');

exports['lodash'] = () => lodash(object, 'a');
