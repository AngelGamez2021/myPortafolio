import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GraficsIndesignComponent } from './componentes/grafics-indesign/grafics-indesign.component';
import { DesarrollosAngularComponent } from './componentes/desarrollos-angular/desarrollos-angular.component';
import { FotografiaComponent } from './componentes/fotografia/fotografia.component';
import { RestaurafotosComponent } from './componentes/restaurafotos/restaurafotos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'diseño-grafico', component: GraficsIndesignComponent},
  {path: 'desarrollo-Angular', component: DesarrollosAngularComponent},
  {path:'fotografia', component: FotografiaComponent},
  {path: 'restaurafotos', component: RestaurafotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
