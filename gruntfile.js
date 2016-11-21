module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('vendor/redaxmedia/redaxscript/package.json').version,
		shell:
		{
			removeBuild:
			{
				command: 'rm -rf build'
			},
			options:
			{
				stdout: true,
				failOnError: true
			}
		},
		copy:
		{
			distDemo:
			{
				src:
				[
					'assets/**',
					'database/**',
					'dist/**',
					'includes/**',
					'languages/en.json',
					'libraries/**',
					'modules/Analytics/**',
					'modules/Demo/**',
					'templates/admin/**',
					'templates/console/**',
					'templates/default/**',
					'templates/install/**',
					'config.php',
					'console.php',
					'index.php',
					'README.md',
					'.htaccess'
				],
				dest: 'build',
				cwd: 'vendor/redaxmedia/redaxscript/',
				expand: true
			}
		}
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'copy'
	]);
};
