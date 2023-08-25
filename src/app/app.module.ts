import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { GraficsIndesignComponent } from './componentes/grafics-indesign/grafics-indesign.component';
import { DesarrollosAngularComponent } from './componentes/desarrollos-angular/desarrollos-angular.component';
import { UiComponent } from './componentes/ui/ui.component';
import { RestaurafotosComponent } from './componentes/restaurafotos/restaurafotos.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/desarrollos-angular/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraficsIndesignComponent,
    DesarrollosAngularComponent,
    UiComponent,
    RestaurafotosComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
