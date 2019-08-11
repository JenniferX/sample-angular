import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() startedList;
  @Input() credicalList;
  highcharts = Highcharts;
  public options: any = {
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotshadow: false
    },
    colors: ['#51A351', '#BD362F'],
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
       pointFormat: `{series.name}: <b> {point.percentage:.1f}% ({point.y}) <b>`
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Applications',
        colorByPoint: true,
        data: []
      }]
  };
  constructor() {
  }

  ngOnInit() {
    this.options.series[0].data.push(
      {name: 'Started' , y: this.startedList.length, selected: true},
      {name: 'Credical' , y: this.credicalList.length, selected: true},
    );
  }

}
