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
import { EditComponent } from './edit/edit.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExposicionListarComponent } from './components/exposicion-listar/exposicion-listar.component';
import { ExposicionEditComponent } from './components/exposicion-edit/exposicion-edit.component';
import { ExposicionAdicionarComponent } from './components/exposicion-adicionar/exposicion-adicionar.component';
import { PersonaAdicionarComponent } from './components/persona-adicionar/persona-adicionar.component';
import { PersonaEditComponent } from './components/persona-edit/persona-edit.component';
import { PersonaListarComponent } from './components/persona-listar/persona-listar.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'edit', component: EditComponent},
  {path: 'exposicion-edit', component: ExposicionEditComponent},
  {path: 'exposicion-list', component: ExposicionListarComponent},
  {path: 'exposicion-add', component: ExposicionAdicionarComponent},
  {path: 'persona-edit', component: PersonaEditComponent},
  {path: 'persona-list', component: PersonaListarComponent},
  {path: 'persona-add', component: PersonaAdicionarComponent},
  {path: 'contactanos', component: ContactanosComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    AdicionarComponent,
    EditComponent,
    ExposicionListarComponent,
    ExposicionEditComponent,
    ExposicionAdicionarComponent,
    PersonaAdicionarComponent,
    PersonaEditComponent,
    PersonaListarComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
