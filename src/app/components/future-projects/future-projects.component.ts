import { Component, OnInit } from '@angular/core';
import { ThingiverseapiService } from "../../services/thingiverseapi.service";

@Component({
  selector: 'app-future-projects',
  templateUrl: './future-projects.component.html',
  styleUrls: ['./future-projects.component.css']
})
export class FutureProjectsComponent implements OnInit {

  constructor(private apiService: ThingiverseapiService) { }

  ngOnInit(): void {
    this.apiService.getFutureCollection().subscribe((data) => {
      console.log('Get the call ' + data);
    })
  }

}
