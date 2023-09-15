import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GraficsIndesignComponent } from './componentes/grafics-indesign/grafics-indesign.component';
import { DesarrollosAngularComponent } from './componentes/desarrollos-angular/desarrollos-angular.component';
import { UiComponent } from './componentes/ui/ui.component';
import { RestaurafotosComponent } from './componentes/restaurafotos/restaurafotos.component';
import { FormularioComponent } from './componentes/desarrollos-angular/formulario/formulario.component';
import { PresupuestoComponent } from './componentes/desarrollos-angular/presupuesto/presupuesto.component';
import { TableComponent } from './componentes/desarrollos-angular/table/table.component';
import { CrudComponent } from './componentes/desarrollos-angular/crud/crud.component';
import { DashboardComponent } from './componentes/desarrollos-angular/crud/dashboard/dashboard.component';
import { InicioComponent } from './componentes/desarrollos-angular/crud/dashboard/inicio/inicio.component';
import { UsuariosComponent } from './componentes/desarrollos-angular/crud/dashboard/usuarios/usuarios.component';
import { ReporteComponent } from './componentes/desarrollos-angular/crud/dashboard/reporte/reporte.component';
import { CrearUsuarioComponent } from './componentes/desarrollos-angular/crud/dashboard/usuarios/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'diseño-grafico', component: GraficsIndesignComponent},
  {path: 'desarrollo-Angular', component: DesarrollosAngularComponent},
  {path: 'desarrollo-Angular/formulario', component: FormularioComponent},
  {path: 'desarrollo-Angular/presupuesto', component: PresupuestoComponent},
  {path: 'desarrollo-Angular/table', component: TableComponent},
  {path: 'desarrollo-Angular/crud', component: CrudComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path:'', component: InicioComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'crear-usuario', component: CrearUsuarioComponent},
    {path:'reportes', component: ReporteComponent}
  ]},





  {path:'UI', component: UiComponent},
  {path: 'restaurafotos', component: RestaurafotosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
