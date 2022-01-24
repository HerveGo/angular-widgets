import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-tags',
  templateUrl: './aw-tags.component.html',
  styleUrls: ['./aw-tags.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate(500))
    ]),
    trigger('fadeOut', [
      state('void', style({ opacity: 0 })),
      transition(':leave', animate(500))
    ]),
    trigger('slideLeftIn', [
      state('void', style({ transform: 'translateX(-16px)' })),
      transition(':enter', animate(500))
    ]),
    trigger('slideRightOut', [
      state('void', style({ transform: 'translateX(-16px)' })),
      transition(':leave', animate(500))
    ])
  ]
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
