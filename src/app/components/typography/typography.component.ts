import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  fontSize=50;
  lineHeight=60;
  opcionSeleccionado: string  = 'termina';
  opcionSeleccionadoCapturarFont: string  = '400';
  noneSisplay=true;

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
capturarFont(){
  if(this.opcionSeleccionado=="termina"){
    this.opcionSeleccionadoCapturarFont="400";

  }else{
    this.opcionSeleccionadoCapturarFont="400";

  }

}
clickparpadeo(){

  this.noneSisplay=false;
}

  ngOnInit(): void {
  }

}
