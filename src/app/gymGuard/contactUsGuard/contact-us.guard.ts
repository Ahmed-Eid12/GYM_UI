import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreDataService } from 'src/app/services/storage/store-data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactUsGuard implements CanActivate {
  constructor( 
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
