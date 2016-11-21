#!/usr/bin/env bash

replace 'UA-00000000-0' 'UA-16122280-4' -- build/modules/Analytics/assets/scripts/init.js
replace 'auto' 'demo.redaxscript.com' -- build/modules/Analytics/assets/scripts/init.js

cd build
php console.php config parse --db-url $DB_URL
php console.php uninstall database
php console.php install database --admin-name admin --admin-user admin --admin-password admin --admin-email admin@localhost
php console.php install module --alias Analytics
php console.php install module --alias Demo
php console.php install module --alias Preview
php console.php status database
php console.php config lock