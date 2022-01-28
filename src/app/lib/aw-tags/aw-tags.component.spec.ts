import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AwTagsComponent } from './aw-tags.component';

describe('AwTagsComponent', () => {
  let component: AwTagsComponent;
  let fixture: ComponentFixture<AwTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwTagsComponent ],
      imports: [BrowserAnimationsModule]
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

  it("shouldn't have any tags", () => {
    expect(component.tags.length).toEqual(0);
  });

  it("should add tag", () => {
    const input: DebugElement = fixture.debugElement.query(By.css("input"));
    expect(input).toBeTruthy();
    input.nativeElement.value = 'Tag 1';
    input.triggerEventHandler("keyup.enter", { target: input.nativeElement });
    fixture.detectChanges();

    spyOn(fixture.componentInstance, "add");
    fixture.componentInstance.add(new Event("keyup.enter"));

    expect(component.tags.length).toEqual(1);
    expect(component.tags[0] = "tag 1");
    expect(fixture.componentInstance.add).toHaveBeenCalled();
    expect(fixture.componentInstance.add).toHaveBeenCalledTimes(1);

  });


});
