import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GymLoginHomeComponent } from './pages/gym-login-home/gym-login-home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PlayerComponent } from './pages/player/player.component';
import { ManpulatePlayerComponent } from './pages/manpulate-player/manpulate-player.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { PageStatusComponent } from './utils/page-status/page-status.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminUsersControlComponent } from './pages/admin-users-control/admin-users-control.component';
import { PlayerControlComponent } from './pages/player-control/player-control.component';
import { UpdateUserControlComponent } from './pages/update-user-control/update-user-control.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    DefaultLayoutComponent,
    HomePageComponent,
    GymLoginHomeComponent,
    LoginComponent,
    UserProfileComponent,
    PlayerComponent,
    ManpulatePlayerComponent,
    NavBarComponent,
    PageStatusComponent,
    ContactUsComponent,
    UserRegisterComponent,
    UpdatePlayerComponent,
    NotFoundComponent,
    AdminHomePageComponent,
    AdminUsersControlComponent,
    PlayerControlComponent,
    UpdateUserControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
     ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
