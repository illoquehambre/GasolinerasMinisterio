import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinerasListComponent } from './components/gasolineras-list/gasolineras-list.component';


const routes: Routes = [
  { path: 'listadoGasolineras', component: GasolinerasListComponent },
  { path: '', redirectTo: '/listadoGasolineras', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
