import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  registerForm: FormGroup;
  cliente: Cliente;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      nit: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      correo: ['', [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
    });

  }


  register() {
    if (this.registerForm.valid) {
      this.cliente = Object.assign({}, this.registerForm.value);
      this.clienteService.addCliente(this.cliente).subscribe({
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
