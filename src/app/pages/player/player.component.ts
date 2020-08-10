import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserGymAdmin } from 'src/app/classes/user/user-gym-admin';
import { Player } from 'src/app/classes/player/player';
import { CustomService } from 'src/app/services/custom/custom.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css','./selectStyle.css']
})
export class PlayerComponent implements OnInit {

  formGroup = new FormGroup({
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

  constructor(private storeData: StoreDataService,
    private integration: IntegrationService,
    private custom: CustomService) { }

  token;
  adminUser;
  genderLookup;
  subtypeLookup;
  exerciseTypeLookup;
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

  // save new player
  playerStatus = null;
  playerCode;
  saveNewPlayer() {
    if(this.formGroup.value) {
      this.integration.addNewPlayer(this.formGroup.value ,
        this.adminUser.id, this.token).subscribe((playerGenerated: Player) => {
          console.log(playerGenerated);
          if(playerGenerated) {
            this.playerCode = playerGenerated.code;
            this.playerStatus = true;
            this.custom.resetComponentElement(this.formGroup);
          } else {
            this.playerStatus = false;
          }
        }, error => {
          this.playerStatus = false;
        });
    }
    
  }

}
