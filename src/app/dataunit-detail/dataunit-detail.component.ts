import { Component, OnInit, Input } from '@angular/core';
import { Dataunit } from '../dataunit';

@Component({
  selector: 'app-dataunit-detail',
  templateUrl: './dataunit-detail.component.html',
  styleUrls: ['./dataunit-detail.component.css']
})
export class DataunitDetailComponent implements OnInit {
  @Input() dataunit: Dataunit;

  constructor() { }

  ngOnInit() {
  }

}
