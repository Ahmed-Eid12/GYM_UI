import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminIntegrationService {
  constructor(private http: HttpClient) {}

  URI = 'http://localhost:7172/adminServiceIntegration/';

  // get list of exercise type
  getSysExerciseTypeList(token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(this.URI + 'getSysExerciseTypeList', requestOptions);
  }

  // get list of users
  getusersList(token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(this.URI + 'getUsersList', requestOptions);
  }

  // get list of players
  getPlayersList(token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(this.URI + 'getPlayersList', requestOptions);
  }

  // delete of player
  deletePlayerById(id, token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.delete(this.URI + 'deletePlayer/' + id, requestOptions);
  }

  // get user By Id
  getUserById(id, token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(this.URI + 'getUserById/'+id, requestOptions);
  }

  // get user By Id
  updateUserAdmin(id, userUI, token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.put(this.URI + 'updateUserAdmin/'+id, userUI, requestOptions);
  }

  // delete of user
  deleteUserAdminById(id, token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.delete(this.URI + 'deleteUserAdmin/' + id, requestOptions);
  }

  updateUserPassword(changePassword, id, token) {
    const headerDict = {
      Authorization: 'bearer ' + token,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.put(this.URI + 'updateUserPassword/'+id, changePassword, requestOptions);
  }

}
