import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexBagroundComponent } from './index-baground/index-baground.component';
import { SearchComponent } from './search/search.component';
import { TraineeLandingComponent } from './trainee-landing/trainee-landing.component';
import { TraineeCompleatedComponent } from './trainee-compleated/trainee-compleated.component';
import { TraineeCurrentComponent } from './trainee-current/trainee-current.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexBagroundComponent,
    SearchComponent,
    TraineeLandingComponent,
    TraineeCompleatedComponent,
    TraineeCurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
