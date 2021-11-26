import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CustomAdapter } from '../custom-adapter.service';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
  ]
})
export class ProductoRegistroComponent implements OnInit {

  registerForm: FormGroup;
  producto: Producto;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private dateAdapter: NgbDateAdapter<string>
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")]],
      fecha: ['', Validators.required]
    });

  }


  register() {
    if (this.registerForm.valid) {
      this.producto = Object.assign({}, this.registerForm.value);
      this.productoService.addProducto(this.producto).subscribe({
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

}




