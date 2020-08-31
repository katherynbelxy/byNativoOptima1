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
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

}
