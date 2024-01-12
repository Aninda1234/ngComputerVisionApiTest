import { Component } from '@angular/core';
import { CVService } from '../../services/cv.service';

@Component({
  selector: 'app-logo-recognition',
  templateUrl: './logo-recognition.component.html',
  styleUrls: ['./logo-recognition.component.css']
})
export class LogoRecognitionComponent {
  imageUrl: string | null = null;
  logoRecognitionResults: any | null = null;

  constructor(private cvService: CVService) {}

  onFileChange(event: any): void {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      

        // Call CVService to recognize the logo
        this.cvService.recognizeLogo(file).subscribe(
          (response) => {
            console.log(response);
            this.logoRecognitionResults = response;
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
