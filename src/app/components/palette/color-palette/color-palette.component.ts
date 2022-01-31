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
    c = c.replace(/§tab/g, "    ");
    return c;
  }

  hslToRgb(h:number, s:number, l:number): number[] {
    h = h/380;
    s = s/100;
    l = l/100;
    let r:number, g:number, b:number;

    if(s == 0) {
        r = g = b = l; // achromatic
    } else {
        let hue2rgb = function hue2rgb(p:number, q:number, t:number): number{
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    console.log("r="+r);
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  
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
  

  blackOrWhite(h:number, s:number, l:number): boolean {
    const [r,g,b] = this.hslToRgb(h,s,l);
    
    let Ys: number = Math.pow(r/255.0,2.2) * 0.2126 +
          Math.pow(g/255.0,2.2) * 0.7152 +
          Math.pow(b/255.0,2.2) * 0.0722;
    return Ys > 0.4;
  }
}
