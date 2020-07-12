module.exports = () =>
{
	const config =
	{
		distDemo:
		{
			src:
			[
				'assets/**',
				'cache/**',
				'database/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/AliasGenerator/**',
				'modules/Analytics/**',
				'modules/ConfirmAction',
				'modules/Demo/**',
				'modules/Dialog/**',
				'modules/FormValidator/**',
				'modules/ImageUpload/**',
				'modules/RankSorter/**',
				'modules/Reporter/**',
				'modules/TextareaResizer/**',
				'modules/UnmaskPassword/**',
				'modules/VisualEditor/**',
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
