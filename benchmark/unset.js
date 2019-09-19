const utils = require('../dist')
const lodash = require('lodash/unset')

var object = {
    'a': [{
        'b': {
            'c': 7
        }
    }]
};

exports['utils'] = () => utils.unset(object, 'a[0].b.c');

exports['lodash'] = () => lodash(object, 'a[0].b.c');