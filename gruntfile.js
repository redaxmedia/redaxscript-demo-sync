module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		shell: require('./tasks/shell'),
		copy: require('./tasks/copy')
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'copy'
	]);
	grunt.registerTask('config',
	[
		'shell:configDatabase',
		'shell:configModules'
	]);
	grunt.registerTask('install',
	[
		'shell:installDatabase'
	]);
};
