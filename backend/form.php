<?php

$email = $_POST['email'];
$telnr = $_POST['telnr'];
$imie = $_POST['imie'];
$tekst = $_POST['tekst'];

$head =
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/plain; charset=$charset\r\n" .
    "Content-Transfer-Encoding: 8bit";

$od = "\nFrom: test@jurand.cba.pl";
$email = 'test@jurand.cba.pl';
$subject = 'temat';
$message = 'Dziękujemy za wysłanie formularza';
$error = 'Wystąpił błąd podczas wysyłania formularza';
$charset = 'iso-8859-2';
$body = '';

echo mail($email, $subject, $body, $head, $od) ? $message : $error;
