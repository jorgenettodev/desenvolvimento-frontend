import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextInterpolationComponent } from './components/views/text-interpolation/text-interpolation.component';
import { HomeComponent } from './components/views/home/home.component';
import { PropertyBindingComponent } from './components/views/property-binding/property-binding.component';
import { EventBindingComponent } from './components/views/event-binding/event-binding.component';

const routes: Routes = [
  { "path": "", component: HomeComponent },
  { "path": "text-interpolation", component: TextInterpolationComponent },
  { "path": "property-binding", component: PropertyBindingComponent },
  { "path": "event-binding", component: EventBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
