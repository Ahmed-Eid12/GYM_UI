import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { UserService } from 'src/app/services/user/user.service';
import { Player } from 'src/app/classes/player/player';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manpulate-player',
  templateUrl: './manpulate-player.component.html',
  styleUrls: ['./manpulate-player.component.css'],
})
export class ManpulatePlayerComponent implements OnInit, OnDestroy {
  constructor(
    private storeData: StoreDataService,
    private integration: IntegrationService,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  token;
  code;
  playerSelected: Player;
  ngOnInit(): void {
    this.token = this.storeData.getStoreElement('gym-t-gym');
    this.code = this.storeData.getElementWthoutSecret('gym-pc-gym');
    this.integration
      .getPlayerByCode(this.code, this.token)
      .subscribe((player: Player) => {
        if (player) {
          console.log(player)
          this.playerSelected = player;

          this.decrimentDays(player);
        }
        this.batteryStatus();
      });
  }

  formGroup = new FormGroup({
    amountPaid: new FormControl('', [Validators.required]),
    amountRest: new FormControl('', []),
    modifiedDate: new FormControl('', []),
  });

  // set user image . must be user image
  selectedImage;

  // change player image
  changePlayerImage($event) {
    this.selectedImage = $event.target.files[0];
    this.integration
      .changePlayerImage(this.selectedImage, this.code, this.token)
      .subscribe((status) => {});
  }

  updateUserStatus() {
    if (this.code) {
      this.userService._updatePlayerStatus = true;
      this.router.navigate(['/updatePlayer']);
    } else {
      this.userService._updatePlayerStatus = false;
    }
  }

  // renew Player Subscription
  renewPlayerSubscription() {
    this.formGroup.get('modifiedDate').setValue(new Date());
    this.integration
      .renewPlayerSubscription(this.formGroup.value, this.code, this.token)
      .subscribe((status) => {
      });
  }

  // decriment dayToLeave;
  dayToLeave;
  @ViewChild('day_to_leave', {static: true}) day_to_leave: ElementRef;
  decrimentDays(player: Player) {
    let today = new Date();
    let _today = today.toLocaleDateString('en-US');

    let todaym = new Date(player.dateModify);
    let _todaym = todaym.toLocaleDateString('en-US');

    // add all in new Date() ...
    let today_to_leave = new Date(_today);
    let toleave_date = new Date(_todaym);

    // There are 1000 milliseconds in 1 second
    let milliSecondsInOneSecond = 1000;
    // There are 3600 seconds in 1 hour
    let secondsInOneHour = 3600;
    // And we all know there are 24 hours in 1 day
    let hoursInOneDay = 24;

    let days = today_to_leave.getTime() - toleave_date.getTime();

    var _days = days / (milliSecondsInOneSecond * secondsInOneHour * hoursInOneDay);

    // check about day to leave ...
    if (_today == _todaym && player.sysSubtype.id == 1) {
      this.dayToLeave = 30;
    } 
    else if (_today == _todaym && player.sysSubtype.id == 2) {
      this.dayToLeave = this.playerSelected.hulfMonthNo;
    } 
    else if(_today != _todaym && player.sysSubtype.id == 1) {
      this.dayToLeave = 30 - _days;
    } 
    if(_today != _todaym && player.sysSubtype.id == 2) {
      this.dayToLeave = this.playerSelected.hulfMonthNo;
    }
    if(player.sysSubtype.id == 2){
      this.day_to_leave.nativeElement.style.cursor = 'pointer';
    } 
    
  }

  // decrement Hulf Month NO
  decrementHulfMonthNO() {
    let today = new Date();
    let _today = today.toLocaleDateString('en-US');

    let playerModifiedDate = this.playerSelected.dateModify;
    let todaym = new Date(playerModifiedDate);
    let _todaym = todaym.toLocaleDateString('en-US');

    if(_today != _todaym && this.playerSelected.sysSubtype.id == 2) {
      this.dayToLeave = this.playerSelected.hulfMonthNo - 1;
      this.integration.updatePlayerHulfMonthNOByCode(this.dayToLeave, this.code, this.token).subscribe(result => {
        
      });
    }
  }

  // battery Status
  battery_full: boolean;
  battery_three_quarters: boolean;
  battery_half: boolean;
  battery_quarter: boolean;
  battery_empty: boolean;
  batteryStatus() {

    if(this.playerSelected.sysSubtype.id == 1) {

      if(this.dayToLeave <= 30 && this.dayToLeave > 25) {
        this.battery_full = true;
      }
      else if(this.dayToLeave <= 25 && this.dayToLeave > 20) {
        this.battery_three_quarters = true;
      }
      else if(this.dayToLeave <= 20 && this.dayToLeave > 15) {
        this.battery_half = true;
      }
      else if(this.dayToLeave <= 15 && this.dayToLeave > 5) {
        this.battery_quarter = true;
      }
      else if(this.dayToLeave <= 5 && this.dayToLeave > 0) {
        this.battery_empty = true;
      } else {
        this.battery_full = false;
        this.battery_three_quarters = false;
        this.battery_half = false;
        this.battery_quarter = false;
        this.battery_empty = false;
      }

    } 
    else if(this.playerSelected.sysSubtype.id == 2) {

      if(this.dayToLeave <= 15 && this.dayToLeave > 11) {
        this.battery_full = true;
      }
      else if(this.dayToLeave <= 11 && this.dayToLeave > 8) {
        this.battery_three_quarters = true;
      }
      else if(this.dayToLeave <= 8 && this.dayToLeave > 6) {
        this.battery_half = true;
      }
      else if(this.dayToLeave <= 6 && this.dayToLeave > 3) {
        this.battery_quarter = true;
      }
      else if(this.dayToLeave <= 3 && this.dayToLeave > 0) {
        this.battery_empty = true;
      } else {
        this.battery_full = false;
        this.battery_three_quarters = false;
        this.battery_half = false;
        this.battery_quarter = false;
        this.battery_empty = false;
      }

    }

  }

  ngOnDestroy(): void {}

  // popup to resubscription player
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
