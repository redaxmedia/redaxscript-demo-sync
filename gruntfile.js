module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		copy: require('./tasks/copy')(grunt),
		ftpress: require('./tasks/ftpress')(grunt),
		shell: require('./tasks/shell')(grunt)
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
		'shell:installDatabase',
		'shell:installModules'
	]);
	grunt.registerTask('lock',
	[
		'shell:removeConsole'
	]);
	grunt.registerTask('deploy',
	[
		'ftpress:deploy'
	]);
};
