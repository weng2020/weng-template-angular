import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SelectListComponent } from './select-list/select-list.component';
import { PageRoutingModule } from '../pages/pagerouting.module';
import { PaginaxonComponent } from './paginaxon/paginaxon.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ButtonComponent,
    SideNavComponent,
    SplashScreenComponent,
    SelectListComponent,
    PaginaxonComponent
  ],
  imports: [
    BrowserModule,
    PageRoutingModule
  ],
  providers: [],
  exports:[
    NavBarComponent,
    ButtonComponent,
    SideNavComponent,
    SelectListComponent,
    SplashScreenComponent,
    PaginaxonComponent
  ]
})
export class CommonsModule { }
