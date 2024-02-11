module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        // Configuração para a compilação do LESS
        less: {
            development: {
                options: {
                    paths: ['path/to/less/files']
                },
                files: {
                    'path/to/output/style.css': 'path/to/less/input.less'
                }
            }
        },
        // Configuração para a compressão do JavaScript
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            my_target: {
                files: {
                    'path/to/output/script.min.js': ['path/to/js/*.js']
                }
            }
        }
    });

    // Carregar plugins que oferecem as tarefas
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrar tarefas
    grunt.registerTask('default', ['less', 'uglify']);
};