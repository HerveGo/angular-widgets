import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwBlogArticleComponent } from './aw-blog-article.component';

describe('AwBlogArticleComponent', () => {
  let component: AwBlogArticleComponent;
  let fixture: ComponentFixture<AwBlogArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwBlogArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwBlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
