import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChooseNavbarComponent } from './chooseNavbar/choose-navbar/choose-navbar.component';
import { MobileNavbarComponent } from './mobileNavbar/mobile-navbar/mobile-navbar.component';
import { NormalNavbarComponent } from './normalNavbar/normal-navbar/normal-navbar.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ChooseNavbarComponent,
    MobileNavbarComponent,
    NormalNavbarComponent,
    ErrMsgDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    ChooseNavbarComponent,
    ErrMsgDirective
  ]
})
export class SharedModule { }
