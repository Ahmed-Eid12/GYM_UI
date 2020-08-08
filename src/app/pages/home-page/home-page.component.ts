import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntegrationService } from 'src/app/services/serviceIntegration/integration.service';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Player } from 'src/app/classes/player/player';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private integration: IntegrationService,
    private sotreData: StoreDataService,
    private router: Router,
    private userService: UserService) { 
    }

  formGroup = new FormGroup({
    'codeOrPlayerName': new FormControl('', [Validators.required])
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

}
