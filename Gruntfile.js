module.exports = function(grunt) {

    grunt.initConfig({

        // Compile JS to single file. Only call this in production build,
        // dev build should be done by copying the js source over.
        requirejs: {
            prod: {
                options: {
                    baseUrl: 'src/',
                    mainConfigFile: 'src/require-config.js',
                    name: 'bower_components/almond/almond',
                    out: 'src/main.min.js',
                    include: ['main'],
                    insertRequire: ['main']
                }
            }
        },

        // Compile SCSS.
        compass: {
            dev: {
                options: {
                    environment: 'development',
                    sassDir: 'src/sass',
                    cssDir: 'dist/'
                }
            },
            prod: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'src',
                    outputStyle: 'compressed',
                    environment: 'production',
                    watchTask: true
                }
            }
        },

        // BrowserSync.
        browserSync: {
            dev: {
                bsFiles: {
                    src: 'dist/daynight.css'
                },
                options: {
                    proxy: 'http://localhost/daynight/dist/',
                    watchTask: true
                }
            }
        },

        // Compile Jade templates.
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    './dist/index.html': 'src/index.jade'
                }
            }
        },

        // Clear the dist folder.
        clean: {
            dist: ['./dist']
        },

        // Combine css files together.
        concat: {
            dev: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.css', 'dist/daynight.css'],
                dest: 'dist/daynight.css'
            },
            prod: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'dist/daynight.css'],
                dest: 'dist/daynight.css'
            }
        },

        // Watch for changes.
        watch: {
            files: 'src/sass/*.scss',
            tasks: ['compass:dev', 'concat:dev']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-clean');

    /*
    * Development build process:
    *   Clean /dist.
    *   Compile any .jade files.
    *   Compile any .sass files.
    *   Add lib css to compiled sass.
    *   Compile Coffeescript. (*)
    *   Run JS through RequireJS. (*)
    */

    // Development task.
    grunt.registerTask('dev', [
        'clean:dist',
        'jade:compile',
        'compass:dev',
        'concat:dev'
    ]);

    grunt.registerTask('default', ["browserSync", "watch"]);
};