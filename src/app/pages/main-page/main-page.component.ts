import { Component } from '@angular/core';
import { CVService } from '../../services/cv.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // imageUrl: string | null = null;
  // objectRecognitionResults: any | null = null;
  // logoRecognitionResults: any | null = null;
  // oCRResults: any | null = null; 

  // constructor(private cvService: CVService) {}

  // onFileChange(event: any): void {
  //   const file = event.target.files?.[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       this.imageUrl = e.target?.result as string;
        
  //       // Call CVService to recognize the object
  //       this.cvService.recognizeObject(file).subscribe(
  //         (response) => {
  //           console.log(response);
  //           this.objectRecognitionResults = response;
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //       );


  //       // Call CVService to recognize the logo
  //       this.cvService.recognizeLogo(file).subscribe(
  //         (response) => {
  //           console.log(response);
  //           this.logoRecognitionResults = response;
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //       );

  //       // Call CVService to recognize Optical Characters
  //       this.cvService.recognizeOpticalCharacter(file).subscribe(
  //         (response) => {
  //           console.log(response);
  //           this.oCRResults = response;
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //       );

  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }
}

