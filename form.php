<?
$email = $_POST['email'];
$telnr = $_POST['telnr'];
$imie = $_POST['imie'];
$tekst = $_POST['tekst'];

if($tekst == "")
{
    echo "Nie wpisałeś żadnego tekstu wiadomości"
}

$message = "Imie i nazwisko:".$imie." ".$tekst  

$header = "From:".$email."\nContent-Type:".
' text/plain;charset="UTF-8"'.
"\nContent-Transfer-Encoding: 8bit";

if(filter_var($email,FILTER_SANITIZE_EMAIL));
{
    if(mail("b.zebrowski@wp.pl", $imie , $message))
    {
        echo "Poprawnie wysłano wiadomość"
    }else{
        echo "Wystąpił nieoczekiwany błąd, spróbuj jeszcze raz"
    }

}