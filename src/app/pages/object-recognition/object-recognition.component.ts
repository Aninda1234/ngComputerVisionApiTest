import { Component } from '@angular/core';
import { CVService } from '../../services/cv.service';

@Component({
  selector: 'app-object-recognition',
  templateUrl: './object-recognition.component.html',
  styleUrls: ['./object-recognition.component.css']
})
export class ObjectRecognitionComponent {
  imageUrl: string | null = null;
  objectRecognitionResults: any | null = null;

  constructor(private cvService: CVService) {}

  onFileChange(event: any): void {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
        
        // Call CVService to recognize the object
        this.cvService.recognizeObject(file).subscribe(
          (response) => {
            console.log(response);
            this.objectRecognitionResults = response;
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
