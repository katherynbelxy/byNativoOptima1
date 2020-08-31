import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {

  //Variable para slider
  slider: number = 0
  slider2: number = -200

  constructor() { }

  ngOnInit(): void {
  }

}
