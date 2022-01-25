import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AwBlogArticleComponent } from '../aw-blog-article/aw-blog-article.component';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog',
  templateUrl: './aw-blog.component.html',
  styleUrls: ['./aw-blog.component.scss']
})
export class AwBlogComponent implements OnInit {

  articles: AwBlogArticleModel[] = [];

  @ViewChildren(AwBlogArticleComponent)
  articlesList!: QueryList<AwBlogArticleComponent>;

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

  expandAll() {
    this.articlesList.forEach( article => article.expand() );
  }

  collapseAll() {
    this.articlesList.forEach( article => article.collapse() );
  }

}
