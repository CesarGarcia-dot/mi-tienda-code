import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientesRoutingModule } from "./clientes-routing.module";
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteRegistroComponent } from './cliente-registro/cliente-registro.component';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  declarations: [
    ClienteListaComponent,
    ClienteRegistroComponent,
    ClienteDetalleComponent
  ]
})

export class ClientesModule { }