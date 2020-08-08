import { Component, OnInit } from '@angular/core';
import { StoreDataService } from 'src/app/services/storage/store-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private storeData: StoreDataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.storeData.deleteStorageElement('gym-status-gym');
    this.storeData.deleteStorageElement('gym-ul-gym');
    this.storeData.deleteStorageElement('gym-pc-gym');
    this.storeData.deleteStorageElement('gym-t-gym');

    this.router.navigate(['/login']);
  }

}
