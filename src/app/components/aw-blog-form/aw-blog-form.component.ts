import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-blog-form',
  templateUrl: './aw-blog-form.component.html',
  styleUrls: ['./aw-blog-form.component.scss']
})
export class AwBlogFormComponent implements OnInit {

  @Input() max: number = 0;

  article: {title: string, text: string} = {
    title: "",
    text: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
