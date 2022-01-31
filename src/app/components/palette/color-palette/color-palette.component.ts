import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aw-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
  encapsulation: ViewEncapsulation.None,
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

  code(h:number, s:number, l:number): string {
    let c: string = `:root {<br>
    §tab--clr-primary: hsl(<span class='value'>${h}</span>, <span class='value'>${s}%</span>, <span class='value'>${l}%</span>);<br>
    §tab--clr-analog: hsl(<span class='value'>${this.analog(h)}</span>, <span class='value'>${s}%</span>, <span class='value'>${l}%</span>);<br>
    §tab--clr-complementary: hsl(<span class='value'>${this.complementary(h)}</span>, <span class='value'>${s}%</span>, <span class='value'>${l}%</span>);<br>
    }`;
    [":", "{", "}", ",", ";"].forEach( char => {
      let reg = new RegExp(char, "g");
      c = c.replace(reg, `<span class='symbol'>${char}</span>`)
    });
    c = c.replace(/\(/g, "<span class='symbol'>(</span>");
    c = c.replace(/\)/g, "<span class='symbol'>)</span>");
    c = c.replace(/hsl/g, "<span class='keyword'>hsl</span>");
    c = c.replace(/root/g, "<span class='keyword'>root</span>");
    c = c.replace(/§tab/g, "    ");
    return c;
  }

  hslToRgb(h:number, s:number, l:number): number[] {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  };

  rgbString(h:number, s:number, l:number): string {
    const [r,g,b] = this.hslToRgb(h,s,l);
    return this.rgbToHex(r,g,b);
  }

  rgbToHex(r:number, g:number, b:number): string {
    function componentToHex(c:number): string {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    const result: string = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return result.toLocaleUpperCase();
  }
  
  /**
   * Should we use black or white text for this hsl color ?
   * @param h hue
   * @param s saturation
   * @param l luminosity
   * @returns true for black, false for white
   */
  blackOrWhite(h:number, s:number, l:number): boolean {
    const [r,g,b] = this.hslToRgb(h,s,l);
    
    let Ys: number = Math.pow(r/255.0,2.2) * 0.2126 +
          Math.pow(g/255.0,2.2) * 0.7152 +
          Math.pow(b/255.0,2.2) * 0.0722;
    return Ys > 0.4;
  }
}
