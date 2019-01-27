<?php

 $connection = mysqli_connect('localhost', 'root', '' , 'kfsfk');
 // DB connection
 if( $connection == false )
 {
     echo 'Connection fault!';
     echo mysqli_connect_error();
     exit();
 }

 ?>