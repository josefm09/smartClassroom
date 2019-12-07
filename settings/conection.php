<?php

$servername = "localhost";
$username = "phpmyadmin";
$password = "root";
$database = "sisProg";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//echo "conectado";
?>
