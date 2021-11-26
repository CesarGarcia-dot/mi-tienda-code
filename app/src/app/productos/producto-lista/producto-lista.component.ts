import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos: Producto[] = [];
  show = false;
  loading: boolean = false;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
  }



  getProductos() {
    this.loading = true;
    this.productoService.getAllProducts().subscribe({
      next: (resp) => {
        this.show = true;
        this.loading = false;
        this.productos = resp;
      },
      error: error => {
        this.show = true;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo anda mal!',
        });
        console.log(error);
      }
    });
  }

}
