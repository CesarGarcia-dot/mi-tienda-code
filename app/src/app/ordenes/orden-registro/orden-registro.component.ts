import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { CustomAdapter } from 'src/app/productos/custom-adapter.service';
import { Producto } from 'src/app/productos/producto';
import { ProductoService } from 'src/app/productos/producto.service';
import Swal from 'sweetalert2';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-orden-registro',
  templateUrl: './orden-registro.component.html',
  styleUrls: ['./orden-registro.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
  ]
})
export class OrdenRegistroComponent implements OnInit {

  registerForm: FormGroup;
  orden: Orden;
  clientes: Cliente[];
  productos: Producto[];

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private ordenService: OrdenService,
    private dateAdapter: NgbDateAdapter<string>
  ) { }

  ngOnInit(): void {
    this.listaClientes();
    this.listaProductos();
    this.createRegisterForm();
  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      idCliente: ['', Validators.required],
      idProducto: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      fecha: ['', Validators.required]
    });

  }


  register() {
    if (this.registerForm.valid) {
      this.orden = Object.assign({}, this.registerForm.value);
      this.ordenService.addOrden(this.orden).subscribe({
        next: (resp) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
          })
          this.createRegisterForm();
        },
        error: error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
          })
          console.log(error)
        }
      });
    }
  }


  listaProductos() {
    this.productoService.getAllProducts().subscribe({
      next: resp => {
        this.productos = resp;
      },
      error: error => console.log(error)
    })
  }


  listaClientes() {
    this.clienteService.getAllCustomers().subscribe({
      next: resp => {
        this.clientes = resp;
      },
      error: error => console.log(error)
    })
  }


}
