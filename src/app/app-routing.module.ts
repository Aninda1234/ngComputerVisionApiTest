// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ObjectRecognitionComponent } from './pages/object-recognition/object-recognition.component';
import { LogoRecognitionComponent } from './pages/logo-recognition/logo-recognition.component';
import { OCRecognitionComponent } from './pages/ocrecognition/ocrecognition.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'app-object-recognition', component: ObjectRecognitionComponent },
  { path: 'app-logo-recognition', component: LogoRecognitionComponent }, 
  { path: 'app-oc-recognition', component: OCRecognitionComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

