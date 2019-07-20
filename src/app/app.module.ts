import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HelloWorld2Component } from './components/hello-world2/hello-world2.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HelloWorld2Component],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
