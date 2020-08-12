import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  get_post='http://localhost:8080/api/upload/get';

  constructor(private http:HttpClient) { }

  getAllFiles()
  {
    return this.http.get(this.get_post)
  }
}
