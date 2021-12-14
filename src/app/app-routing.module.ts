import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GerenteComponent } from './components/gerente/gerente.component';

const routes: Routes = [
  {path:'formulario', component: FormularioComponent},
  {path:'gerente', component: GerenteComponent},
  {path:'',redirectTo:'/formulario',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
