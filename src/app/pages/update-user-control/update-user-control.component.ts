import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { AdminIntegrationService } from 'src/app/services/adminServiceIntegration/admin-integration.service';

@Component({
  selector: 'app-update-user-control',
  templateUrl: './update-user-control.component.html',
  styleUrls: ['./update-user-control.component.css','./utils.css']
})
export class UpdateUserControlComponent implements OnInit, OnDestroy   {

  constructor(private storeData: StoreDataService,
    private adminIntegration: AdminIntegrationService) { }

  formGroup = new FormGroup({
    'id': new FormControl('',[]),
    'username': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required]),
    'agree': new FormControl('',[Validators.required])
  });

  userId;
  token;
  user;
  ngOnInit(): void {
    this.userId = this.storeData.getElementWthoutSecret('us-fo-up');
    this.token = this.storeData.getStoreElement('gym-t-gym');
    this.adminIntegration.getUserById(this.userId, this.token).subscribe(userSelected => {
      this.user = userSelected;
      this.loadUserData();
    });
  }

  // // for change password ...
  // change: boolean;
  // changePassword() {
  //   this.change = !this.change;
  // }

  // load user data for update ...
  loadUserData() {
    this.formGroup.get('username').setValue(this.user.userName);
    this.formGroup.get('email').setValue(this.user.email);
    this.formGroup.get('id').setValue(this.userId);
  }

  updateUserAdmin() {
    if(this.formGroup.valid && 
      this.formGroup.get('agree').value == true) {
        this.adminIntegration.updateUserAdmin(this.userId, this.formGroup.value, this.token).subscribe(userUpdated => {
        });
      }
  }

  ngOnDestroy(): void {
    this.storeData.deleteStorageElement('us-fo-up');
  }

}
