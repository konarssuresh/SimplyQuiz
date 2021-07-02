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
  public stateData: any;
  public pieChartLabels: Label[] = ['correct answers', 'incorrect answers'];
  public pieChartData: SingleDataSet = [0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(private location: Location) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  get percentage(): number {
    return this.stateData?.correctAnswers / this.stateData?.totalQuestions;
  }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.stateData = this.location.getState();
    const { correctAnswers, wrongAnswers } = this.stateData;
    this.pieChartData = [correctAnswers, wrongAnswers];
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
}
