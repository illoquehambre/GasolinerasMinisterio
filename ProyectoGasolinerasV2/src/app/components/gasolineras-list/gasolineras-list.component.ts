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
  carburantesSeleccionados: string[]=[];
  carburantesList: string[] = ['Biodiesel', 'Bioetanol', ' Gas Natural Comprimido', 'Gas Natural Licuado', ' Gases licuados del petróleo', 'Gasoleo A', 'Gasoleo B', 'Gasoleo Premium', 'Gasolina 95 E10', 'Gasolina 95 E5', 'Gasolina 95 E5 Premium', 'Gasolina 98 E10', 'Gasolina 98 E5', 'Hidrogeno'];
  

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.getListado();
  }

  getListado(){
    this.gasolineraService.getGasolinerasMini().subscribe((res)=>{
      this.listGasolineras=res.ListaEESSPrecio
    })
  }
  formatLabel(value: number) {
    if (value > 3) {
      return Math.round(value / 3);
    }

    return value;
  }

  /*getListadoFiltrado(){
    this.gasolineraService.getGasolinerasMini().subscribe((res)=>{
      this.listGasolineras=res.ListaEESSPrecio.filter(res.ListaEESSPrecio=>res.ListaEESSPrecio)
    })
  }
*/

comprobarExistencia(gaso: string){
  console.log(this.carburantesSeleccionados)
  
  let existencia=false;
  if(this.carburantesSeleccionados!=null){
    if(this.carburantesSeleccionados.indexOf(gaso)!=-1){
      existencia=true;
    }
  }
  return existencia;
}
/*
  comprobarExistenciaV2(gaso: Gasolinera, limit: number){
    let valid=false;
    this.carburantesSeleccionados.forEach(carburante => {
      
        if (Number(gaso[`Precio ${carburante}`])>limit) {
          valid=true;
        }
        
      
    });
}*/
}
