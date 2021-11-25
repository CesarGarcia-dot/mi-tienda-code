import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRegistroComponent } from './producto-registro/producto-registro.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductoListaComponent,
    ProductoRegistroComponent,
    ProductoDetalleComponent
  ]
})
export class ProductosModule { }