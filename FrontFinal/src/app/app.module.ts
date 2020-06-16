import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { ListarExpocicionesComponent } from './listar-expociciones/listar-expociciones.component';
import { ListarVentaComponent } from './listar-venta/listar-venta.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'listar', component: ListarComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    AdicionarComponent,
    ListarPersonaComponent,
    ListarExpocicionesComponent,
    ListarVentaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
