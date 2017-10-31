module.exports = function ()
{
	'use strict';

	var config =
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
				'templates/admin/**',
				'templates/default/**',
				'config.php',
				'console.php',
				'index.php',
				'.htaccess'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript/',
			expand: true
		}
	};

	return config;
};