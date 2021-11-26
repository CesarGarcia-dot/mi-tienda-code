import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = [];
  show = false;
  loading: boolean = false;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }



  getClientes() {
    this.loading = true;
    this.clienteService.getAllCustomers().subscribe({
      next: (resp) => {
        this.show = true;
        this.loading = false;
        this.clientes = resp;
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
