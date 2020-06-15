import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placement-two',
  templateUrl: './placement-two.component.html',
  styleUrls: ['./placement-two.component.css']
})
export class PlacementTwoComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

}
