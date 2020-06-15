import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement-home',
  templateUrl: './placement-home.component.html',
  styleUrls: ['./placement-home.component.css']
})
export class PlacementHomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
