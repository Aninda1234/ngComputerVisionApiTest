import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ObjectRecognitionComponent } from './pages/object-recognition/object-recognition.component';
import { LogoRecognitionComponent } from './pages/logo-recognition/logo-recognition.component';
import { OCRecognitionComponent } from './pages/ocrecognition/ocrecognition.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ObjectRecognitionComponent,
    LogoRecognitionComponent,
    OCRecognitionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
