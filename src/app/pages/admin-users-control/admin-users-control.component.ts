import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { AdminIntegrationService } from 'src/app/services/adminServiceIntegration/admin-integration.service';
import { UserGymAdmin } from 'src/app/classes/user/user-gym-admin';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-users-control',
  templateUrl: './admin-users-control.component.html',
  styleUrls: ['./admin-users-control.component.css'],
})
export class AdminUsersControlComponent implements OnInit {
  constructor(
    private storeData: StoreDataService,
    private adminIntegration: AdminIntegrationService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  formGroup = new FormGroup({
    'password': new FormControl('', [Validators.required]),
    'npassword': new FormControl('', [Validators.required]),
    'cpassword': new FormControl('', [Validators.required]),
  });

  usersList;
  token;
  ngOnInit(): void {
    this.token = this.storeData.getStoreElement('gym-t-gym');
    this.getAllUsers();
  }

  // get list of users ...
  getAllUsers() {
    this.adminIntegration.getusersList(this.token).subscribe((list) => {
      this.usersList = list;
    });
  }

  // get for update ...
  userSelectedForUpdate;
  getForUpdate(event) {
    let player = event.target.parentNode.previousSibling;
    player.querySelector('.name');
    let name = player.innerText.split(')')[0].split('(')[1].trim();
    this.userSelectedForUpdate = this.usersList.find((userSelecte) => {
      return name === userSelecte.userName;
    });
    this.storeData.storeElementWthoutSecret('us-fo-up', this.userSelectedForUpdate.id);
    this.router.navigate(['/updateUserAdminControl']);
  }

  // get for delete
  userSelectedForDelete;
  getForDelete(event) {
    let player = event.target.parentNode.previousSibling;
    player.querySelector('.name');
    let name = player.innerText.split(')')[0].split('(')[1].trim();
    this.userSelectedForDelete = this.usersList.find((userSelecte) => {
      return name === userSelecte.userName;
    });
    // console.log(this.userSelected.id);
    if (this.userSelectedForDelete.id) {
      this.adminIntegration
        .deleteUserAdminById(this.userSelectedForDelete.id, this.token)
        .subscribe((none) => {
          this.getAllUsers();
        });
    }
  }

  // get for update password ...
  userSelectedForupdatePassword;
  getForUpdatePassword(event) {
    let player = event.target.parentNode.parentNode;
    let name = player.innerText.split(')')[0].split('(')[1];
    this.userSelectedForupdatePassword = this.usersList.find((userSelecte) => {
      return name.trim() === userSelecte.userName;
    });
  }

  // update user password ...
  updatePasswordStatus: boolean;
  updateUserPassword() {
    if(this.formGroup.valid && (this.formGroup.get('npassword').value === this.formGroup.get('cpassword').value)) {
      this.adminIntegration.updateUserPassword(this.formGroup.value, this.userSelectedForupdatePassword.id, this.token)
      .subscribe(status => {
        if(status) {
          this.updatePasswordStatus = true;
        } else {
          this.updatePasswordStatus = false;
        }
      });
    }
  }

  // popup to resubscription player ...
  closeResult = '';
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
