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

