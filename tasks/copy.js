module.exports = () =>
{
	'use strict';

	const config =
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
				'modules/AliasGenerator/**',
				'modules/Analytics/**',
				'modules/Demo/**',
				'modules/Dialog/**',
				'modules/FormValidator/**',
				'modules/Reporter/**',
				'modules/TextareaResizer/**',
				"modules/TableSorter/**",
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