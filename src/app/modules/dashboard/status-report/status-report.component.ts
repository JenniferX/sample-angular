import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-status-report',
  templateUrl: './status-report.component.html',
  styleUrls: ['./status-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatusReportComponent implements OnInit {
  @Input() envs;
  step = 0;
  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  preStep() {
    this.step --;
  }

}
