import { Component, OnInit } from '@angular/core';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomService } from 'src/app/services/custom/custom.service';
import { UserGymAdmin } from 'src/app/classes/user/user-gym-admin';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private integration: IntegrationService, 
    private custom: CustomService,
    private router: Router,
    private storeData: StoreDataService,
    private userService: UserService,
    private ruote: ActivatedRoute) {
  }

  formGroup = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  redirectUrl;
  login() {
    if(this.formGroup.valid) {
      this.integration.login(this.formGroup.value).subscribe( (res: UserGymAdmin)=> {
        this.custom.changeSuccessMessage(`Welcome ${res.user.userName}`, 'success','SUCCESS!');
        this.userService._userStatus = true;
        this.storeData.storeElement('gym-ul-gym',res.user);
        this.storeData.storeElement('gym-t-gym',res.token);
        this.storeData.storeElementWthoutSecret('gym-status-gym',this.userService._userStatus);
        
        this.ruote.queryParams.subscribe(state => {
          this.redirectUrl = state['redirectUrl'];
        })
        if(this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        } else {
          this.router.navigate(['/homePage']);
        }

      }, error => {
        this.custom.changeSuccessMessage('Email or Password Invalid , try again', 'danger','DANGER!');
      });
    } else {
      this.custom.resetComponentElement(this.formGroup);
      this.custom.changeSuccessMessage('please fill in Email Address and Password ...', 'warning','WARNING!');
    }
  }

}
