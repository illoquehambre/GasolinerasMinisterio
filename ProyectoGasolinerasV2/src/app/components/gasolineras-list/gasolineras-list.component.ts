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
  gasolineraExample: Gasolinera = {} as Gasolinera
  listGasolineras: Gasolinera[] = []
  listGasolinerasFiltradas: Gasolinera[] = []
  listCarburantes: string[] | undefined = []
  carburantesSeleccionados: keyof typeof this.gasolineraExample = 'Precio Gasolina 95 E5'
  //carburantesSeleccionados: string
  carburantesList: string[] = ['Gasoleo A', 'Gasolina 95 E5', 'Hidrogeno'];
  minValue: number = 0.5
  maxValue: number = 3


  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.getListado();

  }

  getListado() {
    this.gasolineraService.getGasolinerasMini().subscribe((res) => {
      this.listGasolineras = res.ListaEESSPrecio
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

  comprobarExistencia(gaso: string) {
    console.log(this.carburantesSeleccionados)

    let existencia = false;
    if (this.carburantesSeleccionados != null) {
      if (this.carburantesSeleccionados.indexOf(gaso) != -1) {
        existencia = true;
      }
    }
    return existencia;
  }


  comprobarExistenciaV2() {
    /*let carburantes: string = {} as string
    carburantes = this.carburantesSeleccionados.toString()

    this.listCarburantes = carburantes.split(',')*/
    this.listGasolinerasFiltradas = [];
    let valid = false;
    console.log(this.carburantesSeleccionados)

    debugger
    this.listGasolineras.forEach(gaso => {

        console.log(Number(gaso[this.carburantesSeleccionados].replace(',', '.')))
        //if (this.listCarburantes)
        //this.listCarburantes.forEach(car => {
        if (gaso[this.carburantesSeleccionados] && Number(gaso[this.carburantesSeleccionados].replace(',', '.')) > this.minValue && Number(gaso[this.carburantesSeleccionados].replace(',', '.')) < this.maxValue) {
          valid = true;
          this.listGasolinerasFiltradas.push(gaso);
        }
        //})

    });
    return this.listGasolinerasFiltradas;
  }
}
