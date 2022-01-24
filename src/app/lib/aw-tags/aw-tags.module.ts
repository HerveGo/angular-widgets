import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwTagsComponent } from './aw-tags.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AwTagsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [AwTagsComponent]
})
export class AwTagsModule { }
