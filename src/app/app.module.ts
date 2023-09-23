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
import { PresupuestoComponent } from './componentes/desarrollos-angular/presupuesto/presupuesto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './componentes/desarrollos-angular/table/toolbar/toolbar.component';
import { TableComponent } from './componentes/desarrollos-angular/table/table.component';


// ANGULAR MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { EmpleadosComponent } from './componentes/desarrollos-angular/table/empleados/empleados.component';
import { CrudComponent } from './componentes/desarrollos-angular/crud/crud.component';
import { LoginComponent } from './componentes/desarrollos-angular/crud/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardComponent } from './componentes/desarrollos-angular/crud/dashboard/dashboard.component';
import { InicioComponent } from './componentes/desarrollos-angular/crud/dashboard/inicio/inicio.component';
import { ReporteComponent } from './componentes/desarrollos-angular/crud/dashboard/reporte/reporte.component';
import { NavbarComponent } from './componentes/desarrollos-angular/crud/dashboard/navbar/navbar.component';
import { UsuariosComponent } from './componentes/desarrollos-angular/crud/dashboard/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CrearUsuarioComponent } from './componentes/desarrollos-angular/crud/dashboard/usuarios/crear-usuario/crear-usuario.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraficsIndesignComponent,
    DesarrollosAngularComponent,
    UiComponent,
    RestaurafotosComponent,
    FormularioComponent,
    PresupuestoComponent,
    TableComponent,
    ToolbarComponent,
    EmpleadosComponent,
    CrudComponent,
    LoginComponent,
    DashboardComponent,
    InicioComponent,
    ReporteComponent,
    NavbarComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
