import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwBlogFormComponent } from './aw-blog-form.component';

describe('AwBlogFormComponent', () => {
  let component: AwBlogFormComponent;
  let fixture: ComponentFixture<AwBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwBlogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
