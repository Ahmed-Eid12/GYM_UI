import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeGuard } from './gymGuard/homePageGuard/home.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ManpulatePlayerComponent } from './pages/manpulate-player/manpulate-player.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { PlayerComponent } from './pages/player/player.component';
import { ManpulatePlayerGuard } from './gymGuard/mPlayerguard/manpulate-player.guard';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';
import { UpdatePlayerGuard } from './gymGuard/updatePlayerGuard/update-player.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserRegisterGuard } from './gymGuard/userRegisterGuard/user-register.guard';
import { PlayerRegisterGuard } from './gymGuard/playerRegisterGuard/player-register.guard';
import { ContactUsGuard } from './gymGuard/contactUsGuard/contact-us.guard';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminUsersControlComponent } from './pages/admin-users-control/admin-users-control.component';
import { PlayerControlComponent } from './pages/player-control/player-control.component';
import { UpdateUserControlComponent } from './pages/update-user-control/update-user-control.component';
import { AdminHomeGuard } from './gymAdminGuard/adminHomePage/admin-home.guard';
import { UserAdminControlGuard } from './gymAdminGuard/userAdminControl/user-admin-control.guard';
import { PlayerControlGuard } from './gymAdminGuard/playerControl/player-control.guard';
import { UpdateUserAdminControlGuard } from './gymAdminGuard/updateUserAdminControl/update-user-admin-control.guard';


const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'userRegister',
        component: UserRegisterComponent,
        canActivate: [UserRegisterGuard]
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'homePage',
        component: HomePageComponent,
        canActivate: [HomeGuard]
      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
        canActivate: [ContactUsGuard]
      },
      {
        path: 'manpulatePlayer',
        component: ManpulatePlayerComponent,
        canActivate: [ManpulatePlayerGuard]
      },
      {
        path: 'playerRegsiter',
        component: PlayerComponent,
        canActivate: [PlayerRegisterGuard]
      },
      {
        path: 'updatePlayer',
        component: UpdatePlayerComponent,
        canActivate: [UpdatePlayerGuard]
      },
      {
        path: 'adminHomePage',
        component: AdminHomePageComponent,
        canActivate: [AdminHomeGuard]
      },
      {
        path: 'userAdminControl',
        component: AdminUsersControlComponent,
        canActivate: [UserAdminControlGuard]
      },
      {
        path: 'playerControl',
        component: PlayerControlComponent,
        canActivate: [PlayerControlGuard]
      },
      {
        path: 'updateUserAdminControl',
        component: UpdateUserControlComponent,
        canActivate: [UpdateUserAdminControlGuard]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
