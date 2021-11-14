import { NgModule } from '@angular/core';
import { ChartsBarComponent } from './charts-bar/charts-bar.component';
import { ChartsLineComponent } from './charts-line/charts-line.component';
import {ChartsPieComponent} from './charts-pie/charts-pie.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ChartsBar', component: ChartsBarComponent },
  { path: 'ChartsLine', component: ChartsLineComponent },  
  { path: 'ChartsPie', component: ChartsPieComponent  },
  { path: '**', pathMatch: '**', redirectTo: '/users/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphicsRoutingModule {
}
