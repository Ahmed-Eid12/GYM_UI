import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }

  URI = 'http://localhost:7172/BackGYM/auth/';
  URLIntegration = 'http://localhost:7172/serviceIntegration/';

  login(loginRequest) { // loginRequest
    return this.http.post(this.URI+'login',loginRequest);
  }

  // register admin user
  reigsterUserAdmin(user, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.post(this.URLIntegration+'registerUserAdmin', user, requestOptions);
  }

  // get gender lookup
  getGenderLookup(token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(this.URLIntegration+'getGenderLookup', requestOptions);
  }

  // get subType lookup
  getSubtypeLookup(token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(this.URLIntegration+'getSubtypeLookup', requestOptions);
  }

  // get exercise type lookup
  getExerciseLookup(token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(this.URLIntegration+'getExerciseLookup', requestOptions);
  }

  // save new player
  addNewPlayer(player ,userId  ,token ) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.post(this.URLIntegration+'addNewPlayer/' + userId ,player ,requestOptions);
  }

  // get player by code ...
  getPlayerByCodeOrPlayerName(codeOrPlayerName, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(this.URLIntegration+'getPlayerByCodeOrPlayerName/'+codeOrPlayerName, requestOptions);
  }

  // get player by code ...
  getPlayerByCode(code, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(this.URLIntegration+'getPlayerByCode/'+code, requestOptions);
  }

  // change player image ... 
  changePlayerImage(image , code, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    let formData = new FormData();
    formData.append('code' , code);
    formData.append('file' , image);
    return this.http.post(this.URLIntegration+'updatePlayerImage' , formData, requestOptions);
  }

  // save new player ...
  updatePlayer(player, code ,token ) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.put(this.URLIntegration+'updatePlayer/'+ code ,player ,requestOptions);
  }

  // Renew player Subscription ...
  renewPlayerSubscription(subscription, code, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.put(this.URLIntegration+'renewPlayerSubscription/'+ code ,subscription ,requestOptions);
  }

  // update Player Hulf Month NO By Code ...
  updatePlayerHulfMonthNOByCode(hulfMonthNO, code, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.put(this.URLIntegration+'updatePlayerHulfMonthNOByCode/'+ code ,hulfMonthNO ,requestOptions);
  }

  // check Password Validation ... 
  checkPasswordValidation(password , userId, token) {
    const headerDict = {
      'Authorization': 'bearer '+token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.post(this.URLIntegration+'checkPasswordValidation/'+userId , password, requestOptions);
  }

}
