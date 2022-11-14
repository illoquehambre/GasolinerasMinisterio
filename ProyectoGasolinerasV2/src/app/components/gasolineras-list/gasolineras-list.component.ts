import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Gasolinera, GasolineraResponse } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { ProvinciasService } from 'src/app/services/provincias.service';

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
  listIDProvincia = [{ id: '02', nombre: 'Albacete' }, { id: '03', nombre: 'Alicante' }, { id: '04', nombre: 'Almería' }, { id: '01', nombre: 'Álava' }, { id: '33', nombre: 'Asturias' }, { id: '05', nombre: 'Ávila' }, { id: '06', nombre: 'Badajoz' }, { id: '07', nombre: 'Baleares' }, { id: '08', nombre: 'Barcelona' }, { id: '48', nombre: 'Bizcaia' }, { id: '09', nombre: 'Burgos' }, { id: '10', nombre: 'Cáceres' }, { id: '11', nombre: 'Cádiz' }, { id: '39', nombre: 'Cantabria' }, { id: '12', nombre: 'Castellón' }, { id: '51', nombre: 'Ceuta' }, { id: '13', nombre: 'Ciudad Real' }, { id: '14', nombre: 'Córdoba' }, { id: '15', nombre: 'Coruña' }, { id: '16', nombre: 'Cuenca' }, { id: '20', nombre: 'Gipuzkoa' }, { id: '17', nombre: 'Girona' }, { id: '18', nombre: 'Granada' }, { id: '19', nombre: 'Guadalajara' }, { id: '21', nombre: 'Huelva' }, { id: '22', nombre: 'Huesca' }, { id: '23', nombre: 'Jaén' }, { id: '24', nombre: 'León' }, { id: '25', nombre: 'Lleida' }, { id: '27', nombre: 'Lugo' }, { id: '28', nombre: 'Madrid' }, { id: '29', nombre: 'Málaga' }, { id: '52', nombre: 'Melilla' }, { id: '30', nombre: 'Murcia' }, { id: '31', nombre: 'Navarra' }, { id: '32', nombre: 'Ourense' }, { id: '34', nombre: 'Palencia' }, { id: '35', nombre: 'Palmas' }, { id: '36', nombre: 'Pontevedra' }, { id: '26', nombre: 'Rioja' }, { id: '37', nombre: 'Salamanca' }, { id: '38', nombre: 'Tenerife' }, { id: '40', nombre: 'Segovia' }, { id: '41', nombre: 'Sevilla' }, { id: '42', nombre: 'Soria' }, { id: '43', nombre: 'Tarragona' }, { id: '44', nombre: 'Teruel' }, { id: '45', nombre: 'Toledo' }, { id: '46', nombre: 'Valencia' }, { id: '47', nombre: 'Valladolid' }, { id: '49', nombre: 'Zamora' }, { id: '50', nombre: 'Zaragoza' }]
  //carburantesSeleccionados: string
  //listProvincias: String[] = this.iAmAMap.values
  carburantesList: string[] = ['Gasoleo A', 'Gasolina 95 E5', 'Hidrogeno'];
  minValue: number = 0.5
  maxValue: number = 3


  constructor(private gasolineraService: GasolineraService, private provinciasService: ProvinciasService) { }

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
  iAmAMap = new Map<string, string>(
    this.listIDProvincia.map(x => [x.id, x.nombre] as [string, string])
  );

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
