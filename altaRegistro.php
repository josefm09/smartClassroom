<?php
include ('./settings/conection.php');

if(isset($_POST['hash'],$_POST['estatus'])){
    $hash = $_POST['hash'];
    $estatus = $_POST['estatus'];
    $sql = "INSERT INTO registros (reg_hash,estatus) VALUES ('$hash','$estatus')";
}else {
    echo "favor de introducir datos validos";
    return;
}

$conn->query($sql); 

echo "Registro almacenado correctamente";

$conn->close();
?> 