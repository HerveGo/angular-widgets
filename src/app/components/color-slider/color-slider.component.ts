import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aw-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements OnInit {

  @Input() sliderName: string = "";
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
