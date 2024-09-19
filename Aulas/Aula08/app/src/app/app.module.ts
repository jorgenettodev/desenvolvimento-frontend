import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TextInterpolationComponent } from './components/views/text-interpolation/text-interpolation.component';
import { HomeComponent } from './components/views/home/home.component';
import { PropertyBindingComponent } from './components/views/property-binding/property-binding.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { EventBindingComponent } from './components/views/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextInterpolationComponent,
    HomeComponent,
    PropertyBindingComponent,
    ButtonComponent,
    EventBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
