# Mi Tienda Prueba Tecnica

Creacion de un proyecto en angular simulando la conexion a una api fake

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/home.png)


### Pre-requisitos 📋

_Se utilizara la paqueteria NPM de Nodejs_

```
Angular : ~12.0.0
SweetAlertJS: 2.0
Moment: +2.0
NgBootstrap
Bootstrap: 5
Json-server
```

### Explicacion del proceso 🔧

El proyecto cuenta con registro de clientes
![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/form-customer.png)

y tambien con mostrar la lista de los datos como se pidio en la prueba tecnica.
Utilizando un servidor de api fake.


![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/lista-clientes.png)

La aplicacion web registra y lista los datos utlizando angular.
Aplicando validaciones correspondientes.

![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/validations-forms-customer.png)

Lista de productos

![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/products-list.png)

Simula el registro de una orden, pidiendo cliente y producto para la asignacion correspondiente.

![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/register-order.png)

Se utilizo una clase "PIPE" personalizada para las alertas de meses restante en una simulacion de entrega de producto. La clase se llama "ordenCaduca" que requiere de un valor llamado "color" ejemplo: ordenCaduca:'color'

![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/orders-list.png)


![alt text](https://raw.githubusercontent.com/CesarGarcia-dot/mi-tienda-code/main/images/pipe.png)

### Lista de requerimientos 📋



1. Realice un sitio donde posea las opciones (botones) listar/agregar cliente, listar/agregar
productos, realizar orden.
 a. Cliente: Id, Nombres, Apellidos, Teléfono, Correo, NIT.
 b. Orden: idProducto, idCliente, idOrden, Cantidad, Fecha.
 c. Producto: id, nombre, descripción, precio.
2. Cree un proyecto Angular con el siguiente ruteo.
 Home: http://mi-tienda/
Clientes:
• http://mi-tienda/clientes/ (Mostrar tabla con los clientes obtenidos del servicio
REST Método GET)
• http://mi-tienda/clientes/agregar (Desde página de clientes redireccionar a
página para poder agregar un cliente al servicio REST Metodo POST)
• http://mi-tienda/clientes/mostrar/1 (Desde página de clientes redireccionar a
página para visualizar seleccionado el cliente, compartir información de página
clientes utilizando servicios).
Productos:
• http://mi-tienda/productos/ (Mostrar tabla con los productos obtenidos del
servicio REST Método GET)
• http://mi-tienda/productos/agregar (Desde página de productos redireccionar a
página para poder agregar un producto al servicio REST método POST).
• http://mi-tienda/productos/mostrar/1 (Desde página de productos redireccionar a
página para visualizar seleccionado el producto, compartir información de página
productos utilizando servicios).
Ordenes:
• http://mi-tienda/crear-orden (Mostrar página para registrar ordenes, todos los
datos serán ingresados).
• http://mi-tienda/ordenes (Mostrar ordenes registradas, REST método GET
3. Utilizar Servicios para el manejo de la información.
4. Crear validaciones de campos requeridos para los ID's.
5. Incluir todas las validaciones necesarias en base al valor del campo (por ejemplo,
Validar que formatos sean correctos).
6. Hacer uso de formGroup/formArray.
7. Utilizar carga a demanda de componentes a partir de plantillas, no hacer uso
“routing.module".
8. Sobreescribir comportamiento de asignacion de valores en formControl y mostrar en
consola la asignacion del valor.
9. Hacer uso de implementación de cadenas de formularios y grupos de formularios.
10. Hacer uso de implementación de un escenario utilizando PIPE (Personalizado).
11. Hacer uso de implementación de un escenario utilizando DIRECTIVAS (Personalizado). :x:
12. Hacer uso de herencias entre componentes.
13. Presentación de mensajes al usuario.
14. Versione el proyecto utilizando git.
