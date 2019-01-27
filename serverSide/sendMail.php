<?php
include ("setCookieIP.php");
include ("setPhone.php");
include ("home.php");
include ("main.php");
//unset($_COOKIE["kfskSetIP"]);
//die("ok");

// if method take offer is GET - this is BAD
if(isset($_GET['offer_submit']))
{
    exit('Method send form is GET.');
}

// if have cookie with this ip - don`t send message (antispam)
$ip = md5(setIP());
if ($ip == $_COOKIE["kfskSetIP"]) {
    generatePage();
    echo("Мы обнаружили, что вы уже недавно заполняли форму(куки)." . homePage());
}
// if don`t have this cookie - create him and check phone in DB.(antispam x2)
else
{
    setMyCookie();
    if(findPhone($connection)) {
        generatePage();
        sendMail();
    }
    else {
        generatePage();
        echo("Мы обнаружили, что вы уже недавно заполняли форму(бд)." . homePage());
    }
}

function sendMail() {
    //mail where send message and theme
    $myMail = "example@gmail.com";
    $theme  = "Оффер с клуба Синдо";

    // set valid data
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

    // create message
    $message = "
    Оффер с сайта sindo.ru.\r\n
    Информация о контактном лице:\r\n
    ФИО: " . $name . ".\r\n
    Контактный телефон: " . $phone . ".\r\n
    Имя спортсмена: " . $child . ".\r\n
    Возраст спортсмена: " . $age . ".\r\n
    Заявление было отправлено: " . date("d.m.y") . ". 
    ";

    // try send on mail
    if (mail($myMail, $theme, $message)) {
        echo "Форма успешно была отправлена на почту." . homePage();
    }
    else {
        echo "Форма не была доставлена на почту из-за тех.неполадок. Попробуйте еще раз позже." . homePage();
    }
}