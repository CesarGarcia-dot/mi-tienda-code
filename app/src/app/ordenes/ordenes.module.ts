import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrdenesRoutingModule } from "./ordenes-routing.module";
import { OrdenRegistroComponent } from './orden-registro/orden-registro.component';
import { OrdenListaComponent } from './orden-lista/orden-lista.component';
import { OrdenService } from "./orden.service";


@NgModule({
    imports: [
        CommonModule,
        OrdenesRoutingModule
    ],
    declarations: [
    OrdenRegistroComponent,
    OrdenListaComponent
  ],
  providers: [
    OrdenService
  ]
})

export class OrdenesModule {}