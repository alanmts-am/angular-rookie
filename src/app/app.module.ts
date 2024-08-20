import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { IoPropertiesComponent } from './components/io-properties/io-properties.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FundoAzulDirective } from './shared/fundo-azul.directive';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    HomeComponent,
    IoPropertiesComponent,
    DirectivesComponent,
    DataBindingComponent,
    FundoAzulDirective,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
