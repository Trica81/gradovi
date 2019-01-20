import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaultPageComponent } from './view/resault-page/resault-page.component';
import { StartPageComponent } from './view/start-page/start-page.component';
import { AutocompliteComponent } from './view/start-page/autocomplite/autocomplite.component';
import { SelectedCitysComponent } from './view/start-page/selected-citys/selected-citys.component';
import { AppService } from './service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './service/guard.service';
import { ProgressBarModule } from 'angular2-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    ResaultPageComponent,
    StartPageComponent,
    AutocompliteComponent,
    SelectedCitysComponent
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
