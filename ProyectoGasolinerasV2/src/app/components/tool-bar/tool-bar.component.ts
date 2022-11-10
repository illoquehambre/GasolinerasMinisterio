import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  carburantes = new FormControl('');
  carburantesSeleccionados: string[]=[];
  carburantesList: string[] = ['Biodiesel', 'Bioetanol', ' Gas Natural Comprimido', 'Gas Natural Licuado', ' Gases licuados del petróleo', 'Gasoleo A', 'Gasoleo B', 'Gasoleo Premium', 'Gasolina 95 E10', 'Gasolina 95 E5', 'Gasolina 95 E5 Premium', 'Gasolina 98 E10', 'Gasolina 98 E5', 'Hidrogeno'];
  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCarburante() {
    if(this.carburantesSeleccionados !== null){
      /*this.pokemonService.getPokemon(this.pokemonSelected).subscribe(resp =>{
        this.pokemonDetails = resp;
      })*/
      
      localStorage.setItem('carburantesSeleccionados',this.carburantesSeleccionados.toString())
      
      
    }
   

  }
 
}
