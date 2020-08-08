import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  _userStatus: boolean = false;
  _CodePlayerStatus: boolean = false;
  _updatePlayerStatus: boolean = false;

}
