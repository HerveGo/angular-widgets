import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog-article',
  templateUrl: './aw-blog-article.component.html',
  styleUrls: ['./aw-blog-article.component.scss']
})
export class AwBlogArticleComponent implements OnInit {

  @Input() article!: AwBlogArticleModel;

  @ViewChild("content")
  content!: ElementRef;

  state: "expanded" | "collapsed" = "expanded";

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    switch(this.state) {
      case "expanded":
        this.collapse();
        break;
      case "collapsed":
        this.expand();
        break;
    }
  }

  public expand(): void {
    this.state = "expanded";
  }

  public collapse(): void {    
    this.state = "collapsed";
  }

}
