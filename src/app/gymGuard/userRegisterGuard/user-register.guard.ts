import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { StoreDataService } from 'src/app/services/storage/store-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterGuard implements CanActivate {
  constructor(private userService: UserService, 
    private ruoter: Router,
    private storeData: StoreDataService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let userStatus = this.storeData.getElementWthoutSecret('gym-status-gym');
      if(userStatus) {
        return true;
      } else {
        this.ruoter.navigate(['/homePage']);
        return false;
      }
  }
}
