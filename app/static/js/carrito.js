        // Variable que mantiene el estado visible del carrito
        var carritoVisible = false;

        // Esperamos que todos los elementos de la página carguen para ejecutar el script
        if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', ready);
        } else {
            ready();
        }

        function ready() {
            // Restaurar el carrito desde localStorage
            restaurarCarrito();

            // Agregar funcionalidad a los botones eliminar del carrito
            var btn_del_item = document.getElementsByClassName('btn-eliminar');
            for (var i = 0; i < btn_del_item.length; i++) {
                var button = btn_del_item[i];
                button.addEventListener('click', eliminarItemCarrito);
            }

            // Agrego funcionalidad al boton sumar cantidad
            var btn_plus_cant = document.getElementsByClassName('sumar-cantidad');
            for (var i = 0; i < btn_plus_cant.length; i++) {
                var button = btn_plus_cant[i];
                button.addEventListener('click', sumarCantidad);
            }

            // Agrego funcionalidad al botón restar cantidad
            var btn_min_cant = document.getElementsByClassName('restar-cantidad');
            for (var i = 0; i < btn_min_cant.length; i++) {
                var button = btn_min_cant[i];
                button.addEventListener('click', restarCantidad);
            }

            // Agregamos funcionalidad al botón Agregar al carrito
            var btn_agregar_carrito = document.getElementsByClassName('boton-item');
            for (var i = 0; i < btn_agregar_carrito.length; i++) {
                var button = btn_agregar_carrito[i];
                button.addEventListener('click', agregarAlCarritoClicked);
            }

            // Agregamos funcionalidad al botón comprar
            document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);
        }

        // Eliminamos todos los elementos del carrito y lo ocultamos
        function pagarClicked() {
            alert("Gracias por la compra");
            // Elimino todos los elementos del carrito
            var carritoItems = document.getElementsByClassName('carrito-items')[0];
            while (carritoItems.hasChildNodes()) {
                carritoItems.removeChild(carritoItems.firstChild);
            }
            actualizarTotalCarrito();
            ocultarCarrito();
            guardarCarrito();
        }

        // Función que controla el botón clickeado de agregar al carrito
        function agregarAlCarritoClicked(event) {
            var button = event.target;
            var item = button.parentElement;
            var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
            var precio = item.getElementsByClassName('precio-item')[0].innerText;
            var imagenSrc = item.getElementsByClassName('img-item')[0].src;
            console.log(imagenSrc);

            add_item_cart(titulo, precio, imagenSrc);

            cart_visible();
        }

        // Función que agrega un item al carrito
        function add_item_cart(titulo, precio, imagenSrc) {
            var item = document.createElement('div');
            item.classList.add('item');
            var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

            // Controlamos que el item que intenta ingresar no se encuentre en el carrito
            var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
            for (var i = 0; i < nombresItemsCarrito.length; i++) {
                if (nombresItemsCarrito[i].innerText == titulo) {
                    alert("El item ya se encuentra en el carrito");
                    return;
                }
            }

            var itemCarritoContenido = `
                <div class="carrito-item">
                    <img src="${imagenSrc}" width="80px" alt="">
                    <div class="carrito-item-detalles">
                        <span class="carrito-item-titulo">${titulo}</span>
                        <div class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad"></i>
                            <input type="text" value="1" class="carrito-item-cantidad" disabled>
                            <i class="fa-solid fa-plus sumar-cantidad"></i>
                        </div>
                        <span class="carrito-item-precio">${precio}</span>
                    </div>
                    <button class="btn-eliminar">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            item.innerHTML = itemCarritoContenido;
            itemsCarrito.append(item);

            // Agregamos la funcionalidad eliminar al nuevo item
            item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

            // Agregamos la funcionalidad restar cantidad del nuevo item
            var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
            botonRestarCantidad.addEventListener('click', restarCantidad);

            // Agregamos la funcionalidad sumar cantidad del nuevo item
            var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
            botonSumarCantidad.addEventListener('click', sumarCantidad);

            // Actualizamos total y guardamos en localStorage
            actualizarTotalCarrito();
            guardarCarrito();
        }

        // Aumento en uno la cantidad del elemento seleccionado
        function sumarCantidad(event) {
            var buttonClicked = event.target;
            var selector = buttonClicked.parentElement;
            console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
            var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
            cantidadActual++;
            selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
            actualizarTotalCarrito();
            guardarCarrito();
        }

        // Resto en uno la cantidad del elemento seleccionado
        function restarCantidad(event) {
            var buttonClicked = event.target;
            var selector = buttonClicked.parentElement;
            console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
            var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
            cantidadActual--;
            if (cantidadActual >= 1) {
                selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
                actualizarTotalCarrito();
                guardarCarrito();
            }
        }

        // Elimino el item seleccionado del carrito
        function eliminarItemCarrito(event) {
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            // Actualizamos el total del carrito
            actualizarTotalCarrito();
            guardarCarrito();

            // La siguiente función controla si hay elementos en el carrito
            // Si no hay elimino el carrito
        }

        // Actualizamos el total de Carrito
        function actualizarTotalCarrito() {
            // Seleccionamos el contenedor carrito
            var carritoContenedor = document.getElementsByClassName('carrito')[0];
            var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
            var total = 0;
            // Recorremos cada elemento del carrito para actualizar el total
            for (var i = 0; i < carritoItems.length; i++) {
                var item = carritoItems[i];
                var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
                // Quitamos el símbolo peso y el punto de milesimos.
                var precio = parseFloat(precioElemento.innerText.replace('$', '').replace('', ''));
                var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
                console.log(precio);
                var cantidad = cantidadItem.value;
                total = total + (precio * cantidad);
            }
            total = Math.round(total * 100) / 100;

            document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es");
        }

        // Guardar carrito en localStorage
        function guardarCarrito() {
            var carritoItems = document.getElementsByClassName('carrito-item');
            var items = [];

            for (var i = 0; i < carritoItems.length; i++) {
                var item = carritoItems[i];
                var titulo = item.getElementsByClassName('carrito-item-titulo')[0].innerText;
                var precio = item.getElementsByClassName('carrito-item-precio')[0].innerText;
                var cantidad = item.getElementsByClassName('carrito-item-cantidad')[0].value;
                var imagenSrc = item.getElementsByTagName('img')[0].src;

                items.push({
                    titulo: titulo,
                    precio: precio,
                    cantidad: cantidad,
                    imagenSrc: imagenSrc
                });
            }

            localStorage.setItem('carrito', JSON.stringify(items));
        }

        // Restaurar carrito desde localStorage
        function restaurarCarrito() {
            var items = JSON.parse(localStorage.getItem('carrito'));
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    add_item_cart(items[i].titulo, items[i].precio, items[i].imagenSrc);
                    // Set the quantity manually
                    var carritoItems = document.getElementsByClassName('carrito-item');
                    carritoItems[carritoItems.length - 1].getElementsByClassName('carrito-item-cantidad')[0].value = items[i].cantidad;
                }
                actualizarTotalCarrito();
            }
        }

        // Función que hace visible el carrito
        function cart_visible() {
            document.getElementById('carrito').style.display = 'block';
            carritoVisible = true;
        }

        // Función que oculta el carrito
        function ocultarCarrito() {
            document.getElementById('carrito').style.display = 'none';
            carritoVisible = false;
        }
