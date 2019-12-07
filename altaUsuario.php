<?php
include ('./settings/conection.php');

if(isset($_POST['nombre'],$_POST['area'],$_POST['hash'])){
    $nombre = $_POST['nombre'];
    echo $nombre;
    $area = $_POST['area'];
    echo $area;
    $hash = $_POST['hash'];
    echo $hash;
    $sql = "INSERT INTO usuarios (nombre,area,reg_hash) VALUES ('$nombre','$area','$hash')";
}else {
    echo "favor de introducir datos validos";
    return;
}

$conn->query($sql); 

echo "Usuario almacenado correctamente";

$conn->close();
?> 