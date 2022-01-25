import { Component, OnInit } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog',
  templateUrl: './aw-blog.component.html',
  styleUrls: ['./aw-blog.component.scss']
})
export class AwBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(article: AwBlogArticleModel): void {
    console.log(article);
    
  }

}
