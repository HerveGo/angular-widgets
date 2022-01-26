import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() name: string = "";

  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
}
