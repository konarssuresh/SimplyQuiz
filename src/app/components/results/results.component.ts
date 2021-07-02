import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['correct answers', 'incorrect answers'];
  public pieChartData: SingleDataSet = [0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(private location: Location) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    console.log(this.location.getState());
    const stateData: any = this.location.getState();
    const { correctAnswers, wrongAnswers } = stateData;
    this.pieChartData = [correctAnswers, wrongAnswers];
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
}
