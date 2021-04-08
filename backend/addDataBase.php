<?php


function addDataBase($email, $telnr, $imie, $tekst)
{
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "stronajuranda";
    $time = date('Y-m-d H:i:s');

    $query = "INSERT INTO emails (name, message, email, telnumber, date) VALUES ($imie, $tekst, $email, $telnr, $time)";
    $connect =  mysqli_connect($host, $user, $password, $database);
    mysqli_query($connect, $query);
}
