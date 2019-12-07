<?php
include ('./settings/conection.php');


if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "SELECT reg_hash FROM usuarios WHERE reg_hash = $id";
}else {
    echo "favor de introducir el id correcto";
    return;
}

if (!$resultado = $conn->query($sql)) {
    // ¡Oh, no! La consulta falló. 
    echo "Lo sentimos, este sitio web está experimentando problemas.";

    // De nuevo, no hacer esto en un sitio público, aunque nosotros mostraremos
    // cómo obtener información del error
    echo "Error: La ejecución de la consulta falló debido a: \n";
    echo "Query: " . $sql . "\n";
    echo "Errno: " . $conn->errno . "\n";
    echo "Error: " . $conn->error . "\n";
    exit;
}
$data = $resultado->fetch_assoc();

echo $data['reg_hash'];

$conn->close();
?> 