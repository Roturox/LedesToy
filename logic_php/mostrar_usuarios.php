<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Link del boostrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- Link del css -->
    <link rel="stylesheet" href="../app/static/css/style.css">
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

    <h1 class="text-center p-3">Hola Mundio</h1>
    <div class="container-fluid row">
        
       <form class="col-4 p-3">
        <h3 class="text-center text-secondary">Registro de Persona</h3>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> Nombre de la persona</label>
            <input type="text" class="form-control" name="nombre">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Apellido de la persona</label>
            <input type="text" class="form-control" name="apellido">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Dni de la persona</label>
            <input type="text" class="form-control" name="dni">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Fecha de nacimineto</label>
            <input type="date" class="form-control" name="fecha">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo de la persona</label>
            <input type="text" class="form-control" name="Correo">
        </div>
        <button type="submit" class="btn btn-primary" name="btnregistrar" value="OK">Registrar</button>
        </form>

        <div class="col-8 p-4">
                            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
        </div>

    </div>


<!-- Script Boostrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>