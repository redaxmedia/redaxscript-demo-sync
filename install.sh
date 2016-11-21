#!/usr/bin/env bash

cd build
php console.php config parse --db-url $DB_URL
php console.php uninstall database
php console.php install database --admin-name admin --admin-user admin --admin-password admin --admin-email admin@localhost
php console.php install module --alias Demo
php console.php status database
rm console.php