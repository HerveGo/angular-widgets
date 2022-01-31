import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {
  }

  analog(hue: number): number {
    return this.normalizeHue(hue + 30);
  }

  complementary(hue: number): number {
    return this.normalizeHue(hue + 180);
  }

  private normalizeHue(hue: number): number {
    while( hue > 380 ) {
      hue -= 380;
    }
    while( hue < 0 ) {
      hue += 380;
    }
    return hue;
  }

  primaryColor(h: number, s:number, l:number):string {
    return `hsl(${h},${s}%,${l}%)`;
  }

  analogColor(h: number, s:number, l:number):string {
    return `hsl(${this.analog(h)},${s}%,${l}%)`;
  }

  complementaryColor(h: number, s:number, l:number):string {
    return `hsl(${this.complementary(h)},${s}%,${l}%)`;
  }

}
