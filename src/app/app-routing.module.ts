import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GraficsIndesignComponent } from './componentes/grafics-indesign/grafics-indesign.component';
import { DesarrollosAngularComponent } from './componentes/desarrollos-angular/desarrollos-angular.component';
import { UiComponent } from './componentes/ui/ui.component';
import { RestaurafotosComponent } from './componentes/restaurafotos/restaurafotos.component';
import { FormularioComponent } from './componentes/desarrollos-angular/formulario/formulario.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'diseño-grafico', component: GraficsIndesignComponent},
  {path: 'desarrollo-Angular', component: DesarrollosAngularComponent},
  {path: 'desarrollo-Angular/formulario', component: FormularioComponent},

  {path:'UI', component: UiComponent},
  {path: 'restaurafotos', component: RestaurafotosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
