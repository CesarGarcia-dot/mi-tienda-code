import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orden } from './orden';



@Injectable({
  providedIn: 'root',
})

export class OrdenService {

  apiUrl = environment.apiUrl + 'ordenes';
  public ordenes: Orden[] = [];

  constructor(private http: HttpClient) { }


  getOrder(id: number) {
    return this.http.get<Orden>(this.apiUrl + '/' + id);
  }

  getAllOrders(): Observable<Orden[]> {
    return this.http.get<Orden[]>(this.apiUrl);
  }

  addOrder(orden: Orden) {
    return this.ordenes.push(orden);
  }


}
