import { IfStmt } from '@angular/compiler';
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
  listCarburantes: string[]|undefined=localStorage.getItem('carburantesSeleccionados')?.split(',')


  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.getListado();
  }

  getListado(){
    this.gasolineraService.getGasolinerasMini().subscribe((res)=>{
      this.listGasolineras=res.ListaEESSPrecio
    })
  }

  /*getListadoFiltrado(){
    this.gasolineraService.getGasolinerasMini().subscribe((res)=>{
      this.listGasolineras=res.ListaEESSPrecio.filter(res.ListaEESSPrecio=>res.ListaEESSPrecio)
    })
  }
*/

comprobarExistencia(gaso: string){
  if(this.listCarburantes){
    if(this.listCarburantes.indexOf(gaso)!=-1){
      return true
    }else{
      return false
    
  }

  }else{
      return false
  }
  
}
}
