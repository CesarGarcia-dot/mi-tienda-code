import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrdenesRoutingModule } from "./ordenes-routing.module";
import { OrdenRegistroComponent } from './orden-registro/orden-registro.component';
import { OrdenListaComponent } from './orden-lista/orden-lista.component';
import { OrdenService } from "./orden.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrdenCaducaPipe } from "./orden-caduca.pipe";


@NgModule({
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  declarations: [
    OrdenRegistroComponent,
    OrdenListaComponent,
    OrdenCaducaPipe
  ],
  providers: [
    OrdenService
  ]
})

export class OrdenesModule { }