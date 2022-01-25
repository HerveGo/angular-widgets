import { Component, OnInit } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog',
  templateUrl: './aw-blog.component.html',
  styleUrls: ['./aw-blog.component.scss']
})
export class AwBlogComponent implements OnInit {

  articles: AwBlogArticleModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(article: AwBlogArticleModel): void {
    console.log(article);
    //important cloner pour éviter de copier une référence
    const cloneArticle = JSON.parse(JSON.stringify(article));
    this.articles.push(cloneArticle);
    article.title = "";
    article.text = "";
  }

}
