import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AwTagsModule } from './lib/aw-tags/aw-tags.module';
import { AwBlogComponent } from './components/aw-blog/aw-blog.component';
import { AwBlogFormComponent } from './components/aw-blog-form/aw-blog-form.component';
import { AwBlogArticleComponent } from './components/aw-blog-article/aw-blog-article.component';
import { CardComponent } from './components/card/card.component';
import { AwTabsModule } from './lib/aw-tabs/aw-tabs.module';
import { AwCarouselComponent } from './components/aw-carousel/aw-carousel.component';
import { CryptoMarketsComponent } from './components/crypto-markets/crypto-markets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPaletteComponent } from './components/palette/color-palette/color-palette.component';
import { ColorSliderComponent } from './components/palette/color-slider/color-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AwBlogComponent,
    AwBlogFormComponent,
    AwBlogArticleComponent,
    CardComponent,
    AwCarouselComponent,
    CryptoMarketsComponent,
    ColorPaletteComponent,
    ColorSliderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AwTagsModule,
    AwTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
