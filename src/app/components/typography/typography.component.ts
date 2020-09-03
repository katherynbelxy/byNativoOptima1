import { Component, OnInit } from '@angular/core';
declare var $: any;

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
    $('td').on('mouseenter', function(){
      var a = $(this).prev('td').attr('aria-label')
      var b = $(this).attr('aria-label')
      var c = $(this).next('td').attr('aria-label')
      $('td').removeClass('rojito')
      $(this).addClass('rojito')
      $(this).next('td').addClass('rojito')
      $(this).prev('td').addClass('rojito')
      $(this).parent().prev('tr').find('.'+a).addClass('rojito')
      $(this).parent().prev('tr').find('.'+b).addClass('rojito')
      $(this).parent().prev('tr').find('.'+c).addClass('rojito')
      $(this).parent().next('tr').find('.'+a).addClass('rojito')
      $(this).parent().next('tr').find('.'+b).addClass('rojito')
      $(this).parent().next('tr').find('.'+c).addClass('rojito')
    })
    $('td').on('mouseleave', function(){
     
      $('td').removeClass('rojito')
    
  })
}

}
