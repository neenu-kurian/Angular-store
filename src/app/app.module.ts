import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomepageCarouselComponent } from './homepage-carousel/homepage-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, HomepageCarouselComponent],
  imports: [BrowserModule, NgbModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
