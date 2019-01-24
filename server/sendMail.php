<?php
$myMail = "example@gmail.com";
$theme  = "Оффер с клуба Синдо";

$name   = $_POST['offer_name'];
$phone  = $_POST['offer_phone'];
$child  = $_POST['offer_childName'];
$age    = $_POST['offer_age'];

$name   = htmlspecialchars($name);
$phone  = htmlspecialchars($phone);
$child  = htmlspecialchars($child);
$age    = htmlspecialchars($age);

$name   = urldecode($name);
$child  = urldecode($child);

$name   = trim($name);
$phone  = trim($phone);
$child  = trim($child);
$age    = trim($age);

$message = "
    Оффер с сайта sindo.ru.\r\n
    Информация о контактном лице:\r\n
    ФИО: " . $name . ".\r\n
    Контактный телефон: " . $phone . ".\r\n
    Имя спортсмена: " . $child . ".\r\n
    Возраст спортсмена: " . $age . ".\r\n
    Заявление было отправлено: " . date("d.m.y") . ". 
    ";

mail($myMail, $theme, $message);
?>