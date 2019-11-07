import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Record } from '../app/record';
import { Observable } from 'rxjs/Observable';
import {FileUploader} from 'ng2-file-upload';

@Injectable()
export class RecordService {

  private recordUrl: string;
 
  uploader: FileUploader;
  constructor(private http: HttpClient) {
    this.recordUrl = 'http://localhost:8080/issuesData';
   
  }

  public findAll(): Observable<Record[]> {
    return this.http.get<Record[]>(this.recordUrl);
  }

  
}
