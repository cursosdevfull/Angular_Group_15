import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

import { series } from './data';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  colors: string[];
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
};

@Component({
  selector: 'cdev-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent {
  chartOptions: Partial<ChartOptions>;
  decimalPipe = new DecimalPipe('en-US');

  constructor() {
    //this.series = series;

    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        foreColor: '#ccc',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: 'straight',
      },

      grid: {
        show: true,
        borderColor: '#334155',
        padding: {
          top: 10,
          bottom: -40,
          left: 0,
          right: 0,
        },
        position: 'back',
        xaxis: {
          lines: {
            show: true,
          },
        },
      },

      colors: ['#818CF8'],

      title: {
        text: 'Fundamental Analysis of Sales',
        align: 'left',
        style: {
          fontSize: '20px',
          fontFamily: 'Roboto',
          fontWeight: 'normal',
          color: 'whitesmoke',
        },
      },
      subtitle: {
        text: `Total by month (PEN)`,
        align: 'left',
        style: {
          fontSize: '14px',
          fontFamily: 'Roboto',
          fontWeight: 'normal',
          color: 'whitesmoke',
        },
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'category',
        labels: {
          offsetY: -20,
          style: {
            colors: '#CBD5E1',
          },
        },
      },
      yaxis: {
        opposite: true,
        labels: {
          formatter: (val) => {
            return this.decimalPipe.transform(val, '1.2-2')!;
          },
        },
      },
      legend: {
        horizontalAlign: 'left',
      },
      tooltip: {
        theme: 'dark',
      },
      fill: {
        colors: ['#312E81'],
      },
      markers: {
        size: 5,
        colors: ['#000524'],
        strokeColors: '#00BAEC',
        strokeWidth: 3,
      },
    };
  }
}
