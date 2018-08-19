# SQlite
#### Содержание 
* Connect
* Query
* Insert

---

### Connect
Подключиться можно через клас или обьект:
* Class
```php
<?php
class MyDB extends SQLite3 {
  function __construct() {
      $this->open('ex.db');
  }
}
$db = new MyDB();
```

* Object
```php
$db = new SQLite3('ex.db');
```

### Query
```php
$rez = $db->query('SELECT * FROM orks');
while( $row = $rez->fetchArray() ){
   echo $row['name'] . '<br>';
}
```

### Insert
```php
$this->query("INSERT INTO orks(id, name) VAlUES($id, $name)");
```
