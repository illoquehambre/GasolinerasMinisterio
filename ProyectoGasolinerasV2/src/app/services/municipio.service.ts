import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MunicipiosResponse } from '../interfaces/municipios.interface';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  getMunicipios(id:string): Observable<MunicipiosResponse[]> {
    
    return this.http.get<MunicipiosResponse[]>(
      `${environment.API_BASE_URL}ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${id}`
    );
  
  }
}
