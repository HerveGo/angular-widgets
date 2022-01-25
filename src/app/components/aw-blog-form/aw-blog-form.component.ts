import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AwBlogArticleComponent } from '../aw-blog-article/aw-blog-article.component';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog-form',
  templateUrl: './aw-blog-form.component.html',
  styleUrls: ['./aw-blog-form.component.scss']
})
export class AwBlogFormComponent implements OnInit {

  @Input() max: number = 0;

  @Output() addEmitter: EventEmitter<AwBlogArticleModel> = new EventEmitter<AwBlogArticleModel>();

  article: AwBlogArticleModel = {
    title: "",
    text:""
  }
  
  @ViewChild("title")
  titleRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  post(): void {
    this.addEmitter.emit(this.article);
    this.titleRef.nativeElement.focus();
  }

}
