module.exports = () =>
{
	'use strict';

	const config =
	{
		configDatabase:
		{
			command:
			[
				'cd build',
				'php console.php config parse --db-url $DB_URL',
				'php console.php status database'
			]
			.join('&&')
		},
		configModules:
		{
			command:
			[
				'replace \'UA-00000000-0\' \'UA-16122280-4\' -- build/modules/Analytics/assets/scripts/init.js',
				'replace \'auto\' \'demo.redaxscript.com\' -- build/modules/Analytics/assets/scripts/init.js'
			]
			.join('&&')
		},
		installDatabase:
		{
			command:
			[
				'cd build',
				'php console.php uninstall database',
				'php console.php install database --admin-name admin --admin-user admin --admin-password admin --admin-email admin@localhost'
			]
			.join('&&')
		},
		installModules:
		{
			command:
			[
				'cd build',
				'php console.php install module --alias Analytics',
				'php console.php install module --alias Demo'
			]
			.join('&&')
		},
		removeConsole:
		{
			command:
			[
				'cd build',
				'rm console.php'
			]
			.join('&&')
		},
		removeBuild:
		{
			command: 'rm -rf build'
		},
		options:
		{
			stdout: true,
			failOnError: true
		}
	};

	return config;
};