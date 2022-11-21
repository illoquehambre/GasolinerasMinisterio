import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GasolinerasListComponent } from './components/gasolineras-list/gasolineras-list.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { AppRoutingModule } from './app-routing.module';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    GasolinerasListComponent,
    ToolBarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule,
    AppRoutingModule, 
    FormsModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
