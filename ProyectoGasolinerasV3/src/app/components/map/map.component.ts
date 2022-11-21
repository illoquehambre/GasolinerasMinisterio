import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Gasolinera } from 'src/app/interfaces/gasolinera.interface';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow = {} as MapInfoWindow;
  @Input() gasPos: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  @Input() zoomInput: number = 0;
  @Input() gasolineras: Gasolinera[] = [];
  @Input() userPos: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral; 
  gasStation: Gasolinera = {} as Gasolinera;
  pos: google.maps.LatLngLiteral= {} as google.maps.LatLngLiteral;
  

  userLat = this.userPos.lat;
  userLng = this.userPos.lng;

  

  constructor() { }

  ngOnInit(): void {
  }

  openInfoWindow(marcador:MapMarker, gasolinera: Gasolinera) {
    this.gasStation = gasolinera;  
    this.infoWindow.open(marcador);
  }
  crearPosicion(gaso: Gasolinera){
    this.pos = { lat: Number(gaso['Latitud']), lng:Number(gaso['Longitud (WGS84)']) }
    return this.pos;
  }
  
  


}
