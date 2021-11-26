import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductoDetailResolver } from "./producto-detail.resolver";
import { ProductoDetalleComponent } from "./producto-detalle/producto-detalle.component";
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";
import { ProductoRegistroComponent } from "./producto-registro/producto-registro.component";



const routes: Routes = [
  { path: '', component: ProductoListaComponent },
  { path: '/productos', component: ProductoListaComponent },
  { path: 'agregar', component: ProductoRegistroComponent },
  { path: 'mostrar/:id', component: ProductoDetalleComponent, resolve: { producto: ProductoDetailResolver } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductosRoutingModule { }