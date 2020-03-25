import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }


  uploadFunctionFile(file: any) {
    let formData = new FormData();
    formData.append('file', file);
    console.log(file);
    return this.http.post('http://localhost:3000/api/v1/sample/upload', formData);
  }



  postFunctionInfo(data: any) {
    console.log(data);
    return this.http.post('http://localhost:3000/api/v1/sample/form', data);
  }
}
