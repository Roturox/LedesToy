<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Link del boostrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- Link del css -->
    <link rel="stylesheet" href="../static/css/style.css">
    <!-- Link de los Icon -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
        <!-- Link de las fuentes -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
    <!-- Nombre de la pestaña -->
    <title>LedesToy peluches y accesorios</title>
</head>
<body>
    <!-- Header de la pagina -->
    <header class="header">
        <div class="logo"> 
            <a href="../../index.html"><img src="../static/img/icon/LedesToy.png" alt="" class="logo-ledestoy">
            </a>
        </div>
        <a href="./Productos.html" class="btn-productos">Productos</a>
        <a href="./login.html" class="btn-login"><button><i class="fa-solid fa-user"></i></button></a>
    </header>
    <!-- Fin del header pagina -->

<div class="fondo_login_register">
    <div class="wrapper">
            <form action="../../logic_php/validar.php" method="post" enctype = "multipart/form-data">
                <h4>¡Nos alegra volverte a ver!</h4>
    
    
                    <!-- Login de Usuario -->
                <div class="input-container">
                    <input type="text" name="Usuario" required>
                    <label for="input" class="label">Usuario</label>
                    <div class="underline"></div>
                </div>
    
                <div class="input-container">
                    <input type="password" name="Contraseña" required>
                    <label class="label">Contraseña</label>
                    <div class="underline"></div>
                </div>
                <!-- Boton para Login -->
                <input type="submit" name="register" value="Enviar" class="btn">
    
    
                <div class="register-link">
                    <p>¿No tienes una cuenta?<a href="./registrar_usuarios.html"> Registrarse</a></p>
                </div>
            </form>
        </div>
        </div>

        <!-- Pie de Pagina-->
    <footer class="footer">
        <ul class="social-icon">
        <li class="icon-elem">
            <a href="" class="icon">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </li>
        <li class="icon-elem">
            <a href="" class="icon">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li class="icon-elem">
            <a href="" class="icon">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </li>
        <li class="icon-elem">
            <a href="" class="icon">
                <i class="fa-brands fa-facebook"></i>
            </a>
        </li>
        <li class="icon-elem">
            <a href="" class="icon">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </li>
        </ul>
        <ul class="menu">
        <li class="menu-elem">
            <a href="../../index.html" class="menu-icon"> Inicio </a>
        </li>
        <li class="menu-elem">
            <a href="" class="menu-icon"> Equipo </a>
        </li>
        <li class="menu-elem">
            <a href="" class="menu-icon"> Contacto </a>
        </li>
        <li class="menu-elem">
            <a href="" class="menu-icon"> Video </a>
        </li>
        <li class="menu-elem">
            <a href="" class="menu-icon"> Sobre Nosotros </a>
        </li>
        </ul>
    </footer>

</body>
</html>