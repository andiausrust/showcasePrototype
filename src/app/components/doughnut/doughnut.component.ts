import {Component, OnInit} from '@angular/core';
import {Color} from 'ng2-charts/lib/color';

@Component({
    selector: 'app-doughnut',
    templateUrl: './doughnut.component.html',
    styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent implements OnInit {

    doughnutChartLabels = ['Malicious', 'Serious', 'Unknown', 'Unclassified'];
    doughnutChartData = [120, 150, 180, 90];
    doughnutChartType = 'doughnut';
    chartOptions = {
        responsive: true,
        maintainAspectRatio: false
    };

    chartColors: Color[] = [
        {backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']},
        {borderColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']}];
    showLegend = true;

    constructor() {
    }

    ngOnInit() {
    }

    typeChanged($event: CustomEvent) {

    }
}
