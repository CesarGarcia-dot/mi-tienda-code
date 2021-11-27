import { Cliente } from "../clientes/cliente";
import { Producto } from "../productos/producto";

export interface Orden {
    id: number;
    idProducto: number;
    idCliente: number;
    cantidad: number;
    fecha: number;
    //propiedades virtuales
    producto: Producto;
    cliente: Cliente;
}