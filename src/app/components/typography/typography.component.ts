import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  fontSize=50;
  lineHeight=60;
  constructor() { }

  saverange(newValue) {
   console.log(newValue);
  } 
  
valueChangedFontSize(e) {
  this.fontSize=e;
}
valueChangedLineheight(e) {
  this.lineHeight=e;
}


  ngOnInit(): void {
  }

}
