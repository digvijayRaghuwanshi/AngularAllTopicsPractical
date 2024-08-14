import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LearnHtmlComponent } from './HTML/learn-html/learn-html.component';
import {HttpClientModule} from '@angular/common/http';
import { LearnHtmlServiceService } from './HTML/learn-html-service.service';
import { BrowserModule } from '@angular/platform-browser';
// import { LearnLifeCycleHooksComponent } from './LifeCyleHooks/learn-life-cycle-hooks/learn-life-cycle-hooks.component';
import { FormsModule } from '@angular/forms';
import { vertusa } from './vertusa/vartusa.component';
@NgModule({
  declarations: [
    AppComponent,
    LearnHtmlComponent,
    vertusa
    // LearnLifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LearnHtmlServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
