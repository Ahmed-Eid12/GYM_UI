import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Player } from 'src/app/classes/player/player';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private integration: IntegrationService,
    private sotreData: StoreDataService,
    private router: Router,
    private userService: UserService,
    private modalService: NgbModal) { 
    }

  formGroup = new FormGroup({
    'codeOrPlayerName': new FormControl('', [Validators.required])
  });

  formGroup2 = new FormGroup({
    'password': new FormControl('', [Validators.required])
  });

  token;
  ngOnInit(): void {
    this.token = this.sotreData.getStoreElement('gym-t-gym');
  }

  getplayerByCode() {
    this.integration.getPlayerByCodeOrPlayerName(this.formGroup.get('codeOrPlayerName').value.trim()
    , this.token).subscribe((player: Player) => {
      if(player) {
        this.sotreData.storeElementWthoutSecret('gym-pc-gym', player.code);
        this.userService._CodePlayerStatus = true;
        if(player) {
          this.router.navigate(['/manpulatePlayer']);
        }
      }
    });
  }

  // check Password Validation to visit admin ...
  user;
  userPsswordStatus;
  checkPasswordValidationAdmin() {
    this.user = this.sotreData.getStoreElement('gym-ul-gym');
    this.integration.checkPasswordValidation(this.formGroup2.get('password').value ,
    this.user.id, this.token).subscribe(status => {
      if(status) {
        this.userPsswordStatus = true;
        this.router.navigate(['/adminHomePage']);
        this.modalService.dismissAll();
      } else {
        this.userPsswordStatus = false;
      }
    });
  }

  // check Password Validation to visit player ...
  userPlayer;
  userPsswordPlayerStatus;
  checkPasswordValidationPlayer() {
    this.userPlayer = this.sotreData.getStoreElement('gym-ul-gym');
    this.integration.checkPasswordValidation(this.formGroup2.get('password').value ,
    this.userPlayer.id, this.token).subscribe(status => {
      if(status) {
        this.userPsswordPlayerStatus = true;
        this.router.navigate(['/playerRegsiter']);
        this.modalService.dismissAll();
      } else {
        this.userPsswordPlayerStatus = false;
      }
    });
  }

  // popup to resubscription player ... (1 admin)
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


  // popup to resubscription player ...
  closeResult2 = '';
  open2(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult2 = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult2 = `Dismissed ${this.getDismissReason2(reason)}`;
        }
      );
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
