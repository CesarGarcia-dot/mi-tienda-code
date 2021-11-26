import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDetailResolver } from './cliente-detail.resolver';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteRegistroComponent } from './cliente-registro/cliente-registro.component';


const routes: Routes = [
  { path: '', component: ClienteListaComponent },
  { path: 'clientes', component: ClienteListaComponent },
  { path: 'agregar', component: ClienteRegistroComponent },
  { path: 'mostrar/:id', component: ClienteDetalleComponent, resolve: { cliente: ClienteDetailResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }