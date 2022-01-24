import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-tags',
  templateUrl: './aw-tags.component.html',
  styleUrls: ['./aw-tags.component.scss']
})
export class AwTagsComponent implements OnInit {

  @Input() tags: string[] = [];
  @Input() max: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(evt: Event): void {
    const el: HTMLInputElement = evt.target as HTMLInputElement;
    if( el.value !== "" && !this.tags.includes(el.value) ) {
      this.tags.push( el.value );
      el.value = "";
    }
  }

  delete(index:number): void {
    this.tags.splice(index, 1);
  }
}
