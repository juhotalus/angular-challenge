import { Component, OnInit } from '@angular/core';
import { Dataunit } from '../dataunit';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  selectedDataunit;

  data: Dataunit[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  onSelect(dataunit: Dataunit): void {
    this.selectedDataunit = dataunit;
  }

  getData(): void {
    this.dataService.getData()
        .subscribe(data => this.data = data);
  }
}
