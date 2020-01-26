import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {Color} from 'ng2-charts/lib/color';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-multi-line-chart',
  templateUrl: './multi-line-chart.component.html',
  styleUrls: ['./multi-line-chart.component.scss'],
})
export class MultiLineChartComponent {
  // Data
  chartData: ChartDataSets[] = [
    {
      data: [2, 6, 4, 9, 2, 4, 1],
      label: 'Serious attacks',
      backgroundColor: '#ff6361'
    },
    {
      data: [6, 2, 4, 7, 2, 9, 1],
      label: 'Known Vector',
      backgroundColor: '#bc5090'
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
      display: false,
      text: 'Attacks'
    },
    pan: {
      enabled: true,
      node: 'xy'
    },
    zoom: {
      enabled: true,
      node: 'xy'
    },
    maintainAspectRatio: false,
    legend: {
      align: 'start'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#ff00ff'
    }
  ];
  chartType = 'line';
  showLegend = true;

  constructor(private http: HttpClient) {

  }

  typeChanged(event: CustomEvent) {
    const on  = event.detail.checked;
    this.chartType = on ? 'bar' : 'line';
  }

}
