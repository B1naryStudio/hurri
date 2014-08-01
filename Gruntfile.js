module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		javascripts: ['frontend/javascripts/**/*.js'],
		server_js: ['backend/**/*.js'],
		views: ['frontend/views/**/*.jade'],
		stylesheets: ['frontend/styles/**/*.styl'],

		jshint: {
			client: ['Gruntfile.js', '<%= javascripts %>'],
			server: ['<%= server_js %>'],
			options: {
				sub: true,
				smarttabs: true,
			}
		},

		watch: {
			options:{
				livereload: true
			},
			scripts: {
				files: ['<%= javascripts %>'],
				tasks: ['jshint:client']
			},
			server_js: {
				files: ['<%= server_js %>'],
				tasks: ['jshint:server'],
				options:{
					livereload: false
				}
			},
			jade: {
				files: ['<%= views %>'],
				tasks: ['jade']
			},
			styles: {
				files: ['<%= stylesheets %>'],
				tasks: ['stylus']
			}
		},
		jade: {
			compile: {
				options: {
					debug: true
				},
				files: {
					'public/index.html': 'frontend/views/index.jade'
				}
			}
		},
		stylus: {
			compile: {
				options: {
					'include css': true,
					'paths': ['frontend/styles/'],
					'compress': true
				},
				files: {
					'public/styles/style.css': ['<%= stylesheets %>']
				}
			}
		},

		open : {
			dev : {
				path: 'http://127.0.0.1:3550/'
			}
		},

		copy: {			
			libs: {files: [{expand: false, src: ['bower_components/requirejs/require.js'], dest: 'public/javascripts/libs/require.js'}]},
			js: {files: [{expand: true, cwd: 'frontend/javascripts/', src: ['**'], dest: 'public/javascripts/'}]}
		},

		clean: {	
			public_js: { src: ['public/javascripts']}
		},

		requirejs: {
			options: {
				baseUrl: '.',
				appDir: 'frontend/javascripts',
				mainConfigFile: 'frontend/javascripts/main.js',
				optimize: 'uglify2',
				generateSourceMaps: false,
				preserveLicenseComments: false,
				useStrict: true,
				removeCombined: false,
				modules: [{
					name: 'main'
				}]
			},

			main : {
				options: {
					dir: 'public/javascripts'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', ['jshint', 'jade', 'stylus', 'clean', 'copy']);
	grunt.registerTask('release', ['jshint', 'jade', 'stylus', 'clean', 'requirejs', 'copy:libs']);
};