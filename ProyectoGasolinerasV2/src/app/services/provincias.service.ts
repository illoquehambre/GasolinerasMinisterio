import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProvinciaResponse } from '../interfaces/provincias.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<ProvinciaResponse> {
    return this.http.get<ProvinciaResponse>(
      `${environment.API_BASE_URL}ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/`
    );
  
  }
}
