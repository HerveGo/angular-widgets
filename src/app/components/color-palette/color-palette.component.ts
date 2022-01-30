import { Component, OnInit } from '@angular/core';
import { ColorSliderComponent } from '../color-slider/color-slider.component';

@Component({
  selector: 'aw-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
