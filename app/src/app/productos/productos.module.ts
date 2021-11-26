import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoRegistroComponent } from './producto-registro/producto-registro.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoService } from './producto.service';
import { ProductoDetailResolver } from './producto-detail.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter } from './custom-adapter.service';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    ProductoListaComponent,
    ProductoRegistroComponent,
    ProductoDetalleComponent
  ],
  providers: [
    ProductoService,
    ProductoDetailResolver,
    CustomAdapter
  ]
})
export class ProductosModule { }