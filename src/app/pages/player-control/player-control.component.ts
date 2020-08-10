import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { AdminIntegrationService } from 'src/app/services/adminServiceIntegration/admin-integration.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { Player } from 'src/app/classes/player/player';

@Component({
  selector: 'app-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.css']
})
export class PlayerControlComponent implements OnInit {

  constructor(private storeData: StoreDataService,
    private adminIntegration: AdminIntegrationService,
    private router: Router,
    private integration: IntegrationService) { }
  
  token;
  playersList;
  ngOnInit(): void {
    this.token = this.storeData.getStoreElement('gym-t-gym');
    this.getPlayerList();
  }
  // get all players ...
  getPlayerList() {
    this.adminIntegration.getPlayersList(this.token).subscribe(players => {
      this.playersList = players;
    });
  }

  // delete player by id ...
  playerSelected;
  deletePlayer(event) {
    let player = event.target.parentNode.previousSibling;
    player.querySelector('.name');
    let name = player.innerText.split(')')[0].split('(')[1].trim();
    this.playerSelected = this.playersList.find(playerSelecte => {
      return name === playerSelecte.playerName;
    });
    this.adminIntegration.deletePlayerById(this.playerSelected.id, this.token).subscribe(status => {
      if(status) {
        this.getPlayerList();
      }
    });
  }

  // visit player page ...
  visitPlayerPage(event) {
    let player = event.target.innerText;
    let name = player.split(')')[0].split('(')[1].trim();
    this.playerSelected = this.playersList.find(playerSelecte => {
      return name === playerSelecte.playerName;
    });
    this.storeData.storeElementWthoutSecret('gym-pc-gym', this.playerSelected.code);
    this.router.navigate(['/manpulatePlayer']);
  }

  formGroup = new FormGroup({
    'codeOrPlayerName': new FormControl('', [Validators.required])
  });

  // get player search ...
  searchPlayer;
  getplayerByCode() {
    if(this.formGroup.get('codeOrPlayerName').valid) {
      this.integration.getPlayerByCodeOrPlayerName(this.formGroup.get('codeOrPlayerName').value.trim()
      , this.token).subscribe((player: Player) => {
        if(player) {
          this.searchPlayer = player;
        }
      });
    }
  }

  // return to all data
  backedToAllData() {
    if(this.searchPlayer) {
      this.searchPlayer = false;
    }
  }

}
