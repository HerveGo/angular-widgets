import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwCarouselComponent } from './aw-carousel.component';

describe('AwCarouselComponent', () => {
  let component: AwCarouselComponent;
  let fixture: ComponentFixture<AwCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
