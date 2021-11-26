import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from './producto';



@Injectable({
    providedIn: 'root',
})

export class ProductoService {

    apiUrl = environment.apiUrl + 'productos';
    public productos: Producto[] = [];

    constructor(private http: HttpClient) { }


    getProduct(id: number): Observable<Producto> {
        return this.http.get<Producto>(this.apiUrl + '/' + id);
    }

    getAllProducts(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.apiUrl);
    }

    addProducto(producto: Producto) {
        return this.http.post(this.apiUrl, producto);
    }


}