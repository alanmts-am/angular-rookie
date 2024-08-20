import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { IoPropertiesComponent } from './components/io-properties/io-properties.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FundoAzulDirective } from './shared/fundo-azul.directive';
import { PipesComponent } from './components/pipes/pipes.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    IoPropertiesComponent,
    DirectivesComponent,
    DataBindingComponent,
    FundoAzulDirective,
    PipesComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync('noop'),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
