import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataunitDetailComponent } from './dataunit-detail/dataunit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DataunitDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
