module.exports = grunt =>
{
	'use strict';

	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'www/htdocs/w00976cb/redaxscript-demo',
			options:
			{
				url: process.env.FTP_URL,
				command: 'mirror {SOURCE} {TARGET} --reverse --delete-first --parallel=10 --use-pget-n=10; chmod 0444 config.php; exit'
			}
		}
	};

	return config;
};