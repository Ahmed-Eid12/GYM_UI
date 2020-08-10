import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { UserService } from 'src/app/services/user/user.service';
import { Player } from 'src/app/classes/player/player';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css','./selectStyle.css']
})
export class UpdatePlayerComponent implements OnInit, OnDestroy {

  constructor(private storeData: StoreDataService,
    private integration: IntegrationService,
    private userService: UserService) { 
      this.token = this.storeData.getStoreElement('gym-t-gym');
      this.code = this.storeData.getElementWthoutSecret('gym-pc-gym');
      this.integration.getPlayerByCode(this.code, this.token).subscribe((player: Player) => {
        if(player) {
          this.playerSelected = player;
          // load player form 
          this.AddSelectedPlayerDataOnForm();
          this.formGroup.get('id').setValue(player.id);
        }
      });
    }

    formGroup = new FormGroup({
      'id': new FormControl('', []),
      'playerName': new FormControl('', [Validators.required]),
      // 'email': new FormControl('', []),
      'address': new FormControl('', [Validators.required]),
      'passportNumber': new FormControl('', [Validators.maxLength(20) , Validators.minLength(10)]),
      'cardNumber': new FormControl('', [Validators.maxLength(14) , Validators.minLength(14)]),
      'phone': new FormControl('', [Validators.required , Validators.maxLength(11) , Validators.minLength(11)]),
      'playerChampionships': new FormControl('', []),
      'amountPaid': new FormControl('', [Validators.required]),
      'sysSubtype': new FormControl('', [Validators.required]),
      'sysExerciseType': new FormControl('', [Validators.required]),
      'sysGender': new FormControl('', [Validators.required]),
      'height': new FormControl('', [Validators.required]),
      'weight': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
      'amountRest': new FormControl('',[]),
    });

  token;
  code;
  adminUser;
  genderLookup;
  subtypeLookup;
  exerciseTypeLookup;
  playerSelected: Player;
  ngOnInit(): void {
    this.token = this.storeData.getStoreElement('gym-t-gym');
    this.adminUser = this.storeData.getStoreElement('gym-ul-gym');

    // get gender lookup
    this.integration.getGenderLookup(this.token).subscribe(genderList => {
      this.genderLookup = genderList;
    });

    // get subtype lookup
    this.integration.getSubtypeLookup(this.token).subscribe(subtypeList => {
      this.subtypeLookup = subtypeList;
    });

    // get exercise type lookup
    this.integration.getExerciseLookup(this.token).subscribe(exerciseList => {
      this.exerciseTypeLookup = exerciseList;
    });

  }

  // load data on form
  AddSelectedPlayerDataOnForm() {
    this.formGroup.get('playerName').setValue(this.playerSelected.playerName);
    this.formGroup.get('address').setValue(this.playerSelected.address);
    this.formGroup.get('passportNumber').setValue(this.playerSelected.passportNumber);
    this.formGroup.get('cardNumber').setValue(this.playerSelected.cardNumber);
    this.formGroup.get('phone').setValue(this.playerSelected.phone);
    this.formGroup.get('playerChampionships').setValue(this.playerSelected.playerChampionships);
    this.formGroup.get('amountPaid').setValue(this.playerSelected.amountPaid);
    this.formGroup.get('amountRest').setValue(this.playerSelected.amountRest);
    this.formGroup.get('height').setValue(this.playerSelected.height);
    this.formGroup.get('weight').setValue(this.playerSelected.weight);
    this.formGroup.get('age').setValue(this.playerSelected.age);

    this.formGroup.get('sysSubtype').setValue(this.playerSelected.sysSubtype.id);
    this.formGroup.get('sysExerciseType').setValue(this.playerSelected.sysExerciseType.id);
    this.formGroup.get('sysGender').setValue(this.playerSelected.sysGender.id);
  }

  // update player
  updatePlayerStatus;
  updatePlayer() {
    this.integration.updatePlayer(this.formGroup.value, this.code, this.token).subscribe(updatedPlayer => {
      if(updatedPlayer) {
        this.updatePlayerStatus = true;
      } else {
        this.updatePlayerStatus = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.userService._updatePlayerStatus = false;
  }

}
