import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {Color} from 'ng2-charts/lib/color';
import {HttpClient} from '@angular/common/http';
import {SassHelpersComponent} from '../../providers/sass-helpers/sass-helpers.component';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BarChartComponent {

    @ViewChild(SassHelpersComponent, {static: true})
    private sassHelper: SassHelpersComponent;

    // Data
    chartData: ChartDataSets[] = [
        {
            data: [6, 2, 4, 7, 2, 9, 1],
            label: 'Second Dataset',
            backgroundColor: '#ef45d6'
        }
    ];

    chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // Options
    chartOptions = {
        layout: {
            padding: {
                bottom: 30
            }
        },
        responsive: true,
        title: {
            display: true,
            text: 'Attack frequency'
        },
        pan: {
            enabled: true,
            node: 'xy'
        },
        zoom: {
            enabled: true,
            node: 'xy'
        },
        maintainAspectRatio: false
    };
    chartColors: Color[] = [
        {
            borderColor: '#000000',
            backgroundColor: '#ff00ff'
        }
    ];
    chartType = 'line';
    showLegend = false;

    constructor(private http: HttpClient) {
    }

    typeChanged(event: CustomEvent) {
        const on = event.detail.checked;
        this.chartType = on ? 'bar' : 'line';
    }
}
