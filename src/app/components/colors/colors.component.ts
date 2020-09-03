import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="large tooltip-inner"></div></div>'
      })
    })
  }

}
