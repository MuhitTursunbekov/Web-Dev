import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpacexLaunchesComponent } from './spacex-launches/spacex-launches.component';
import { LaunchFilterComponent } from './launch-filter/launch-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexLaunchesComponent,
    LaunchFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
