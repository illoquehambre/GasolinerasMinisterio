import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Gasolinera, GasolineraResponse } from 'src/app/interfaces/gasolinera.interface';
import { MunicipiosResponse } from 'src/app/interfaces/municipios.interface';
import { ProvinciaResponse } from 'src/app/interfaces/provincias.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Observable, of } from 'rxjs'
import { catchError, map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
  provinciasSeleccionadas: ProvinciaResponse[] = []
  listIDProvincia = [{ id: '02', nombre: 'Albacete' }, { id: '03', nombre: 'Alicante' }, { id: '04', nombre: 'Almería' }, { id: '01', nombre: 'Álava' }, { id: '33', nombre: 'Asturias' }, { id: '05', nombre: 'Ávila' }, { id: '06', nombre: 'Badajoz' }, { id: '07', nombre: 'Baleares' }, { id: '08', nombre: 'Barcelona' }, { id: '48', nombre: 'Bizcaia' }, { id: '09', nombre: 'Burgos' }, { id: '10', nombre: 'Cáceres' }, { id: '11', nombre: 'Cádiz' }, { id: '39', nombre: 'Cantabria' }, { id: '12', nombre: 'Castellón' }, { id: '51', nombre: 'Ceuta' }, { id: '13', nombre: 'Ciudad Real' }, { id: '14', nombre: 'Córdoba' }, { id: '15', nombre: 'Coruña' }, { id: '16', nombre: 'Cuenca' }, { id: '20', nombre: 'Gipuzkoa' }, { id: '17', nombre: 'Girona' }, { id: '18', nombre: 'Granada' }, { id: '19', nombre: 'Guadalajara' }, { id: '21', nombre: 'Huelva' }, { id: '22', nombre: 'Huesca' }, { id: '23', nombre: 'Jaén' }, { id: '24', nombre: 'León' }, { id: '25', nombre: 'Lleida' }, { id: '27', nombre: 'Lugo' }, { id: '28', nombre: 'Madrid' }, { id: '29', nombre: 'Málaga' }, { id: '52', nombre: 'Melilla' }, { id: '30', nombre: 'Murcia' }, { id: '31', nombre: 'Navarra' }, { id: '32', nombre: 'Ourense' }, { id: '34', nombre: 'Palencia' }, { id: '35', nombre: 'Palmas' }, { id: '36', nombre: 'Pontevedra' }, { id: '26', nombre: 'Rioja' }, { id: '37', nombre: 'Salamanca' }, { id: '38', nombre: 'Tenerife' }, { id: '40', nombre: 'Segovia' }, { id: '41', nombre: 'Sevilla' }, { id: '42', nombre: 'Soria' }, { id: '43', nombre: 'Tarragona' }, { id: '44', nombre: 'Teruel' }, { id: '45', nombre: 'Toledo' }, { id: '46', nombre: 'Valencia' }, { id: '47', nombre: 'Valladolid' }, { id: '49', nombre: 'Zamora' }, { id: '50', nombre: 'Zaragoza' }]
  carburantesList: string[] = ['Gasoleo A', 'Gasolina 95 E5', 'Hidrogeno'];
  minValue: number = 0.5
  maxValue: number = 3
  listProvincias: ProvinciaResponse[] = []
  listMunicipios: MunicipiosResponse[] = []
  listMunicipiosFiltrados: MunicipiosResponse[] = []
  municipioSeleccionado: MunicipiosResponse = {} as MunicipiosResponse
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<MunicipiosResponse[]> = {} as Observable<MunicipiosResponse[]>;

  nombreMunicipios: string[] = []
  map = new google.maps.Map(document.getElementById('map')!, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  

  constructor( private gasolineraService: GasolineraService, private provinciasService: ProvinciasService, private municipiosService: MunicipioService) {
    
   }

  ngOnInit(): void {
    this.getListado();
    this.getProvincias();
  }

  opcionesFiltrado() {
    debugger

  }

  filter(value: string): MunicipiosResponse[] {
    /*let listadoNombresMunicipios: string[] = [];
    this.listMunicipiosFiltrados.forEach(muni => {
      listadoNombresMunicipios.push(muni.Municipio)
    });*/

    debugger
    const filterValue = value.toLowerCase();

    return this.listMunicipiosFiltrados.filter(municipio => municipio.Municipio.toLowerCase().includes(filterValue));
  }

  getListado() {
    this.gasolineraService.getGasolineras().subscribe((res) => {
      this.listGasolineras = res.ListaEESSPrecio;
      this.listGasolinerasFiltradas = this.listGasolineras;
    })
  }
  getProvincias() {

    this.provinciasService.getProvincias().subscribe((res) => {
      this.listProvincias = res;
      this.provinciasSeleccionadas = this.listProvincias;
    })
  }
  getMunicipios(id: string) {
    debugger
    this.municipiosService.getMunicipiosById(id).subscribe(res => {
      this.listMunicipios = res;
      this.listMunicipiosFiltrados = this.listMunicipiosFiltrados.concat(res);

      /*this.filteredOptions = this.myControl.valueChanges.pipe(
        
        startWith(''),
        map(value => this.filter(value || '')),
      ); */
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
    
    let listadoProvinciasV2: string[] = [];

    this.listMunicipiosFiltrados = [];
    this.provinciasSeleccionadas.forEach(provincia => {
      listadoProvinciasV2.push(provincia.IDPovincia)

      debugger
      this.getMunicipios(provincia.IDPovincia);
      /*this.municipiosService.getMunicipiosById(provincia.IDPovincia).subscribe(res => {
        this.listMunicipios = res;

        this.listMunicipiosFiltrados.concat(res);
      })*/


    });
    console.log(this.listMunicipios);
    console.log(this.listMunicipiosFiltrados);


    this.listGasolineras.forEach(gaso => {

    
      //if (this.listCarburantes)
      //this.listCarburantes.forEach(car => {


      if (gaso[this.carburantesSeleccionados]
        && Number(gaso[this.carburantesSeleccionados].replace(',', '.')) > this.minValue
        && Number(gaso[this.carburantesSeleccionados].replace(',', '.')) < this.maxValue) {
        if (listadoProvinciasV2.indexOf(gaso['IDProvincia']) != -1) {
          valid = true;
          this.listGasolinerasFiltradas.push(gaso);
        }

      }
      //})

    });
    return this.listGasolinerasFiltradas;
  }

  limpiarLista() {
    this.provinciasSeleccionadas = [];
    this.comprobarExistenciaV2();
  }

  rellenarLista() {
    this.provinciasSeleccionadas = this.listProvincias;
    this.comprobarExistenciaV2();
  }


}
