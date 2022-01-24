import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwTagsComponent } from './aw-tags.component';

describe('AwTagsComponent', () => {
  let component: AwTagsComponent;
  let fixture: ComponentFixture<AwTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
