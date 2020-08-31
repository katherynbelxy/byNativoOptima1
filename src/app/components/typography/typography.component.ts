import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  saverange(newValue) {
   console.log(newValue);
  } 
  
valueChanged(e) {
  console.log('e', e);
}


  ngOnInit(): void {
  }

}
