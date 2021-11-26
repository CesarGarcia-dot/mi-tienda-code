import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";
import Swal from 'sweetalert2';

@Injectable()

export class ClienteDetailResolver implements Resolve<Cliente>{

    constructor(private clienteService: ClienteService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cliente | Observable<Cliente> | Promise<Cliente> {
        return this.clienteService.getCustomer(route.params['id']).pipe(
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



