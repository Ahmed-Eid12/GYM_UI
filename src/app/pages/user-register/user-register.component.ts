import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { CustomService } from 'src/app/services/custom/custom.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css','./utils.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private integration: IntegrationService,
    private storeData: StoreDataService,
    private custom: CustomService) { }

  formGroup = new FormGroup({
    'username': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'cPassword': new FormControl('',[Validators.required]),
    'agree': new FormControl('',[Validators.required])
  });

  token;
  ngOnInit(): void {
    this.token = this.storeData.getStoreElement('gym-t-gym');
  }

  registerAdminUser() {
    if(this.formGroup.valid && 
      ( this.formGroup.get('password').value === this.formGroup.get('cPassword').value ) && 
      this.formGroup.get('agree').value == true) {

      let email: string = this.formGroup.get('email').value;
      this.formGroup.get('email').setValue(this.custom.checkEmail(email));
      this.integration.reigsterUserAdmin(this.formGroup.value, this.token).subscribe(userRegister => {
        this.custom.resetComponentElement(this.formGroup);
      })
    }
  }

}
