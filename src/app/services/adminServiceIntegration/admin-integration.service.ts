import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminIntegrationService {

  constructor(private http: HttpClient) { }

  URI = 'http://localhost:7172/adminServiceIntegration/';

  getSysExerciseTypeList(token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get(this.URI+'getSysExerciseTypeList' ,requestOptions);
  }
}
