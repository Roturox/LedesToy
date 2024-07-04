<?php
$usuario=$_POST['Usuario'];
$contraseña=$_POST['Contraseña'];
session_start();
$_SESSION['Usuario']=$usuario;

$conexion=mysqli_connect("localhost","root","","ledestoy");

$consulta="SELECT*FROM Usuarios where Usuario='$usuario' and Contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_fetch_array($resultado);

if($filas['id_cargo']==1){ //administrador
    header("location:./app/templates/admin.html");

}else
if($filas['id_cargo']==2){ //cliente
header("location:./app/templates/ropa.html");
}
else{
    ?>
    <?php
    include("index.html");
    ?>
    <h1 class="bad">ERROR EN LA AUTENTIFICACION</h1>
    <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
