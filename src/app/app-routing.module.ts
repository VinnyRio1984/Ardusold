import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadosComponent } from './empregados/empregados.component';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ServicosComponent } from './servicos/servicos.component';
const routes: Routes = [
{
  path: 'empregados',
  component: EmpregadosComponent
},
{
  path: 'maquinas',
  component: MaquinasComponent
},
{
  path: 'clientes',
  component: ClientesComponent
},
{
  path: 'servicos',
  component: ServicosComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
