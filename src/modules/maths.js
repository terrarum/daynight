define(function(require) {
    var logger = require('modules/logger');

    return {
        add: function(x, y) {
            logger.log('add');
            return x + y;
        },

        subtract: function(x, y){
            return x - y;
        },

        divide: function(x, y) {
            return x / y;
        },

        multiply: function(x, y) {
            return x * y;
        }
    }
});