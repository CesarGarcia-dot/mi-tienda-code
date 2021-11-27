import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { Producto } from 'src/app/productos/producto';
import { ProductoService } from 'src/app/productos/producto.service';
import Swal from 'sweetalert2';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-orden-lista',
  templateUrl: './orden-lista.component.html',
  styleUrls: ['./orden-lista.component.css']
})
export class OrdenListaComponent implements OnInit {

  ordenes: Orden[] = [];
  show = false;
  loading: boolean = false;
  clientes: Cliente[];
  productos: Producto[];
  ordenesCombinedArray: any;
  ordenesCombinedArraySecond: any;


  constructor(
    private ordenService: OrdenService,
    private productoService: ProductoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }



  combinacionArreglos() {
    this.loading = true;
    this.productoService.getAllProducts().subscribe({
      next: (resp) => {
        this.productos = resp;
        this.clienteService.getAllCustomers().subscribe({
          next: (resp) => {
            this.clientes = resp;
            this.ordenService.getAllOrders().subscribe({
              next: (resp) => {
                this.ordenes = resp;

                this.ordenes.forEach(x => {
                  this.productos.forEach(y => {
                    this.clientes.forEach(z => {
                      if (x.idProducto === y.id) {
                        x.producto = y;
                      }
                      if (x.idCliente === z.id) {
                        x.cliente = z;
                      }
                    })
                  })
                });

                this.show = true;
                this.loading = false;
              },
              error: error => {
                console.log(error);
              }
            });
          },
          error: error => {
            console.log(error);
          }
        });

      },
      error: error => {
        console.log(error);
      }
    });

  }

}
