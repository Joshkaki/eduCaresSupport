import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datapallete-one',
  templateUrl: './datapallete-one.component.html',
  styleUrls: ['./datapallete-one.component.css']
})
export class DatapalleteOneComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
