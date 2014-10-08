var bower = '../bower_components'
var npm = '../node_modules'
require.config({
    paths: {
        fpsmeter: bower + '/fpsmeter/dist/fpsmeter',
        jquery: bower + '/jquery/dist/jquery',
        jade: npm + '/grunt-contrib-jade/node_modules/jade/jade'
    },
    shim: {
        'fpsmeter': {
            exports: 'FPSMeter'
        }
    }
})