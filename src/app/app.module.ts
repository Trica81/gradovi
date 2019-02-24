import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LatinPipe } from './filters/latin.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaultPageComponent } from './view/resault-page/resault-page.component';
import { StartPageComponent } from './view/start-page/start-page.component';
import { SelectedCitiesComponent } from './view/start-page/selected-cities/selected-cities.component';
import { AppService } from './service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './service/guard.service';
import { ProgressBarModule } from 'angular2-progressbar';
import { AutocompleteComponent } from './view/start-page/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaultPageComponent,
    StartPageComponent,
    AutocompleteComponent,
    SelectedCitiesComponent,
    LatinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProgressBarModule
  ],
  providers: [AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
