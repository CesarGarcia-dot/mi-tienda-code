import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Injectable()

export class ProductoDetailResolver implements Resolve<Producto>{

    constructor(private productoService: ProductoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Producto | Observable<Producto> | Promise<Producto> {
        return this.productoService.getProduct(route.params['id']).pipe(
            catchError(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo anda mal!',
                });
                console.log(error);
                return of(error.message);
            }
            )
        );
    }

}

