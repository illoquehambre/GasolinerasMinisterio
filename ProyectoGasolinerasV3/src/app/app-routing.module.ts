import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinerasListComponent } from './components/gasolineras-list/gasolineras-list.component';
import { MapComponent } from './components/map/map.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';


const routes: Routes = [
  { path: 'listadoGasolineras', component: GasolinerasListComponent },
  { path: '', redirectTo: '/listadoGasolineras', pathMatch: 'full' },
  {path: 'index', component: ToolBarComponent},
  {path: 'mapa', component: MapComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
