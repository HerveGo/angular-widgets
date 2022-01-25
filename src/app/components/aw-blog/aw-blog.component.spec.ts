import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwBlogComponent } from './aw-blog.component';

describe('AwBlogComponent', () => {
  let component: AwBlogComponent;
  let fixture: ComponentFixture<AwBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
