import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GasolineraResponse } from '../interfaces/gasolinera.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }


  getGasolineras(): Observable<GasolineraResponse> {
    return this.http.get<GasolineraResponse>(
      `${environment.API_BASE_URL}ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres`
    );
  
  }

  getGasolinerasMini(): Observable<GasolineraResponse> {
    return this.http.get<GasolineraResponse>(
      `${environment.url_mini}`
    );
  
  }
}
