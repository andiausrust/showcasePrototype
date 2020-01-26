import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {IonicModule} from '@ionic/angular';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';
import {DoughnutComponent} from './doughnut/doughnut.component';
import {MultiLineChartComponent} from './multi-line-chart/multi-line-chart.component';
import {EventsTableComponent} from './events-table/events-table.component';
import {MatCheckboxModule, MatIconModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {SassHelpersModule} from '../providers/sass-helpers/sass-helpers.module';

@NgModule({
    declarations: [
        BarChartComponent,
        DoughnutComponent,
        MultiLineChartComponent,
        EventsTableComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ChartsModule,
        FormsModule,
        MatCheckboxModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        SassHelpersModule
    ],
    exports: [
        BarChartComponent,
        DoughnutComponent,
        MultiLineChartComponent,
        EventsTableComponent
    ]
})
export class ComponentsModule {
}
