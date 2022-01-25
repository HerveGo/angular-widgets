import { Component, Input, OnInit } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog-article',
  templateUrl: './aw-blog-article.component.html',
  styleUrls: ['./aw-blog-article.component.scss']
})
export class AwBlogArticleComponent implements OnInit {

  @Input() article!: AwBlogArticleModel;

  constructor() { }

  ngOnInit(): void {
  }

}
