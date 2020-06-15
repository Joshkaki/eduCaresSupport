import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement-one',
  templateUrl: './placement-one.component.html',
  styleUrls: ['./placement-one.component.css']
})
export class PlacementOneComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
