import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { GraphicsRoutingModule } from "./graphics-routing.module";
import { ChartsModule  } from 'ng2-charts';
import { ChartsLineComponent  } from './charts-line/charts-line.component';
import { ChartsBarComponent  } from './charts-bar/charts-bar.component';
import { ChartsPieComponent  } from './charts-pie/charts-pie.component';

@NgModule({
    imports: [  ChartsModule,FlexLayoutModule,  RouterModule ,CommonModule ,GraphicsRoutingModule,FormsModule,ReactiveFormsModule,MaterialModule],
    declarations: [ChartsLineComponent,ChartsBarComponent,ChartsPieComponent]
})
export class GraphicsModule {
}
