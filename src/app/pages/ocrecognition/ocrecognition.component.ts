import { Component } from '@angular/core';
import { CVService } from '../../services/cv.service';

@Component({
  selector: 'app-oc-recognition',
  templateUrl: './ocrecognition.component.html',
  styleUrls: ['./ocrecognition.component.css']
})
export class OCRecognitionComponent {
  imageUrl: string | null = null;
  oCRResults: any | null = null; 

  constructor(private cvService: CVService) {}

  onFileChange(event: any): void {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
        

        // Call CVService to recognize Optical Characters
        this.cvService.recognizeOpticalCharacter(file).subscribe(
          (response) => {
            console.log(response);
            this.oCRResults = response;
          },
          (error) => {
            console.error(error);
          }
        );

      };

      reader.readAsDataURL(file);
    }
  }
}
