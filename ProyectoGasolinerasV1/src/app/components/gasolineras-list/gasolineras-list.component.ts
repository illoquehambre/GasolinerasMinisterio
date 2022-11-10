import { Component, OnInit } from '@angular/core';
import { Gasolinera, GasolineraResponse } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolineras-list',
  templateUrl: './gasolineras-list.component.html',
  styleUrls: ['./gasolineras-list.component.css']
})
export class GasolinerasListComponent implements OnInit {

  listGasolineras: Gasolinera[]=[]

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.getListado();
  }

  getListado(){
    this.gasolineraService.getGasolinerasMini().subscribe((res)=>{
      this.listGasolineras=res.ListaEESSPrecio
    })
  }

}
