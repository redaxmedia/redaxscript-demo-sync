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
					'cache/**',
					'database/**',
					'dist/**',
					'includes/**',
					'languages/en.json',
					'libraries/**',
					'modules/Analytics/**',
					'modules/Demo/**',
					'modules/Preview/**',
					'templates/admin/**',
					'templates/default/**',
					'config.php',
					'console.php',
					'index.php',
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
