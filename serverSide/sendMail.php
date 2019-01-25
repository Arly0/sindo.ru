<?php
include ("setCookieIP.php");
include ("home.php");

if(isset($_GET['offer_submit']))
{
    exit('Method send form is GET.');
}

setMyCookie();

include ("main.php");

$ip = md5(setIP());
if ($ip == $_COOKIE["kfskSetIP"]) {
    echo("Мы обнаружили, что вы уже недавно заполняли форму." . homePage());
}
else
    sendMail();

function sendMail() {
    $myMail = "example@gmail.com";
    $theme  = "Оффер с клуба Синдо";

    $name = htmlentities(strip_tags($_POST['offer_name']));
    $phone = htmlentities(strip_tags($_POST['offer_number']));
    $child = htmlentities(strip_tags($_POST['offer_childName']));
    $age = htmlentities(strip_tags($_POST['offer_age']));

    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $child = htmlspecialchars($child);
    $age = htmlspecialchars($age);

    $name = urldecode($name);
    $child = urldecode($child);

    $name = trim($name);
    $phone = trim($phone);
    $child = trim($child);
    $age = trim($age);

    $message = "
    Оффер с сайта sindo.ru.\r\n
    Информация о контактном лице:\r\n
    ФИО: " . $name . ".\r\n
    Контактный телефон: " . $phone . ".\r\n
    Имя спортсмена: " . $child . ".\r\n
    Возраст спортсмена: " . $age . ".\r\n
    Заявление было отправлено: " . date("d.m.y") . ". 
    ";

    if (mail($myMail, $theme, $message)) {
        echo "Форма успешно была отправлена на почту." . homePage();
    }
    else {
        echo "Форма не была доставлена на почту из-за тех.неполадок. Попробуйте еще раз позже." . homePage();
    }
}