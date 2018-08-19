# Composer

#### Содержание
* Install
* Init `composer.json` file
* Install package
* Install package as dev dependecy
* Install all packages from `composer.json`
* Removing package

--- 

#### Install 
* Installing locally (composer.phar)  
> curl -sS https://getcomposer.org/installer | php
> then use: `php composer.phar require ...`

* Installing globally via installer  
> https://getcomposer.org/download/

#### Init `composer.json` file
```bash
composer init
```

#### Install package
```
php composer.phar require vendor-name/package-name
composer require vendor-name/package-name
```

#### Install package as dev dependecy
```
php composer.phar require vendor-name/package-name --dev
composer require vendor-name/package-name --dev
```

#### Install all packages from `composer.json`
```
php composer.phar install
composer install
composer install --no-dev
```

#### Removing package
```
php composer.phar remove vendor-name/package-name
composer remove vendor-name/package-name
```

