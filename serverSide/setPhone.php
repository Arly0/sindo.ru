<?php
include ("DBconnection.php");
function findPhone($connection){
    // try find phone in DB, (antispam) and if don`t find, add him
    $phone = htmlentities(strip_tags($_POST['offer_number']));

    $querySelect = "SELECT * FROM `kfsfkIP` WHERE `phone` = '$phone'";
    $queryInsert = "INSERT INTO `kfsfkIP`(`phone`) VALUES ('$phone')";
    $result = mysqli_query($connection, $querySelect);

    if(mysqli_num_rows($result) == 0)
    {
        mysqli_query($connection, $queryInsert);
        return 1;
    }
    else
    {
        return 0;
//        echo "Мы обнаружили, что вы уже отправляли форму" . homePage();
    }
}
?>