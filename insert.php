<?php
if(isset($_POST["sujet"])){
  include("connect.php");
  $sujet = mysqli_real_escape_string($conn, $_POST["sujet"]);
  $message = mysqli_real_escape_string($conn, $_POST["message"]);
  //INSERTION DANS LA BASE DE DONNEE
  $query = "INSERT INTO messages(sujet, message) VALUES ('$sujet', '$message')";
  if (!mysqli_query($conn, $query)) {
    printf("Message d'erreur: %s\n", mysqli_error($conn));
  }
}
?>