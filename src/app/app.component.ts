import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  title = 'angular-widgets';

  ngAfterViewInit(): void {
    console.log("titre="+this.titleRef.nativeElement.textContent);
    
  }

  @ViewChild("pageTitle")
  titleRef!: ElementRef;
}
