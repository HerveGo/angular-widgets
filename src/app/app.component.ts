import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AwCarouselImgModel } from './components/aw-carousel/aw-carousel-img.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  title = 'angular-widgets';

  slides: AwCarouselImgModel[] = [
    new AwCarouselImgModel("titre 1", "description 1", "../../../assets/images/IMGP0355.jpg"),
    new AwCarouselImgModel("titre 1", "description 1", "../../../assets/images/IMGP1529.jpg"),
    new AwCarouselImgModel("titre 1", "description 1", "../../../assets/images/IMGP1574.jpg"),
    new AwCarouselImgModel("titre 1", "description 1", "../../../assets/images/IMGP1627.jpg"),
    new AwCarouselImgModel("titre 1", "description 1", "../../../assets/images/IMGP1738.jpg"),
    new AwCarouselImgModel("titre 1", "description 1", "../../../assets/images/IMGP8823.jpg"),
    
  ]

  ngAfterViewInit(): void {
    console.log("titre="+this.titleRef.nativeElement.textContent);
    
  }

  @ViewChild("pageTitle")
  titleRef!: ElementRef;
}
