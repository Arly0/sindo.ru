<?php
function setMyCookie(){
    // set cookie
    $ip = setIP();

    $cookie = md5($ip);
    $cookieLife = time() + 60;
    setcookie("kfskSetIP", $cookie, $cookieLife);
}

function setIP(){
    // get ip
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = @$_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP)) $ip = $client;
    elseif(filter_var($forward, FILTER_VALIDATE_IP)) $ip = $forward;
    else $ip = $remote;

    return $ip;
}
?>