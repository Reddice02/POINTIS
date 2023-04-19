<?php
$conn = mysqli_connect("localhost", "root", "", "blog") or die("Impossible de se connecter à la base de données");
if (mysqli_connect_errno())
{
  echo "Echec de la connexion à MySQL: " . mysqli_connect_error();
}
?>