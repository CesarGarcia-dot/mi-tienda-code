import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";



const routes: Routes = [
    {path: '', component: ProductoListaComponent},
    {path: '/productos', component: ProductoListaComponent},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProductosRoutingModule {}