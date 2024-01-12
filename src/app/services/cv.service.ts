import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  private baseUrl = 'https://kirin-vision1.p.rapidapi.com';
  private apiKey = 'e596b6f19bmsh086ced2754a3186p15ad14jsn361950cf7f50';
  // private apiKey = '58a5e868b3msh2e63e8890a09db2p1ae132jsna59f15b19998';
  private apiHost = 'kirin-vision1.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  // Object recognition 
  recognizeObject(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
    };
    const objectRecognitionApiUrl = this.baseUrl + '/object';

    return this.http.post(objectRecognitionApiUrl, formData, { headers });
  }

  // Logo recognition 
  recognizeLogo(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
    };
    const logoRecognitionApiUrl = this.baseUrl + '/logo';

    return this.http.post(logoRecognitionApiUrl, formData, { headers });
  }

  // OCR recognition 
  recognizeOpticalCharacter(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
    };
    const oCRApiUrl = this.baseUrl + '/ocr';

    return this.http.post(oCRApiUrl, formData, { headers });
  }

}

