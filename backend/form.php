<?php

require "EmailSender.php";

if (isset($_POST['email']) && isset($_POST['telnr']) && isset($_POST['imie']) && isset($_POST['tekst']) && filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) {
    $email = $_POST['email'];
    $telnr = $_POST['telnr'];
    $imie = $_POST['imie'];
    $tekst = $_POST['tekst'];
    print(EmailSender($email, $telnr, $imie, $tekst) ? "Wysłano wiadomość" : "Wystąpił nieoczekiwany błąd");
} else {
    print("Wszystkie pola muszą być wypełnione");
}
