import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  breakpoint: number;

  constructor(private route: Router) { }

  ngOnInit() {
  }


  Home() {
    this.route.navigate(['Home']);
  }

}
