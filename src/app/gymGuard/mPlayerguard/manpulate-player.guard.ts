import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ManpulatePlayerGuard implements CanActivate {
  constructor(private storeData: StoreDataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let playerStatus = this.storeData.getElementWthoutSecret('gym-status-gym');
    let playerCode = this.storeData.getElementWthoutSecret('gym-pc-gym');
    if(playerStatus && playerCode) {
      return true;
    } else {
      return false;
    }
  }
  
}
