import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmpresasComponent, MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
