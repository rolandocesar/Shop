import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';

import { ContactenosComponent } from './contactenos/contactenos.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import PreguntasFrecuentesComponent from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ContactenosComponent,
    DesarrolladorComponent,
    PreguntasFrecuentesComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    TranslateModule
  ]
})
export class FooterModule { }
