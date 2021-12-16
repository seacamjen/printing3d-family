import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/api";

import { Thing } from 'src/app/interfaces/thing';
import { ThingiverseapiService } from "../../services/thingiverseapi.service";

@Component({
  selector: 'app-future-projects',
  templateUrl: './future-projects.component.html',
  styleUrls: ['./future-projects.component.css']
})
export class FutureProjectsComponent implements OnInit {
  things: Thing[] = [];
  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private apiService: ThingiverseapiService) { 
    this.things = [];
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
    this.sortOrder = 0;
    this.sortField = '';
  }

  ngOnInit(): void {
    this.apiService.getFutureCollection().subscribe((data: any) => {
      this.things = data;
      
    })
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
