import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TextInterpolationComponent } from './components/views/text-interpolation/text-interpolation.component';
import { SandyComponent } from './bobEsponja/lulaMolusco/sandy/sandy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextInterpolationComponent,
    SandyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
