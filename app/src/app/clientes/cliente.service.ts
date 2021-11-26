import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente';



@Injectable({
  providedIn: 'root',
})

export class ClienteService {

  apiUrl = environment.apiUrl + 'clientes';
  clientes: Cliente[] = [];

  constructor(private http: HttpClient) { }


  getCustomer(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiUrl + '/' + id);
  }

  getAllCustomers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  addCliente(cliente: Cliente) {
    return this.http.post(this.apiUrl, cliente);
  }

}


