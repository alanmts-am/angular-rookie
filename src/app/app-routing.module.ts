import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { IoPropertiesComponent } from './components/io-properties/io-properties.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'io-props', component: IoPropertiesComponent },
  { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
