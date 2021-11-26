import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdenListaComponent } from "./orden-lista/orden-lista.component";


const routes: Routes = [
    {path: '', component: OrdenListaComponent},
    {path: '/ordenes', component: OrdenListaComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrdenesRoutingModule { }