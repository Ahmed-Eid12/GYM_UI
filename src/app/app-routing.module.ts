import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeGuard } from './gymGuard/homePageGuard/home.guard';
import { LoginGuard } from './gymGuard/loginGuard/login.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ManpulatePlayerComponent } from './pages/manpulate-player/manpulate-player.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { PlayerComponent } from './pages/player/player.component';
import { ManpulatePlayerGuard } from './gymGuard/mPlayerguard/manpulate-player.guard';
import { UpdatePlayerComponent } from './pages/update-player/update-player.component';
import { UpdatePlayerGuard } from './gymGuard/updatePlayerGuard/update-player.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'userRegister',
        component: UserRegisterComponent
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
        component: ContactUsComponent
      },
      {
        path: 'manpulatePlayer',
        component: ManpulatePlayerComponent,
        canActivate: [ManpulatePlayerGuard]
      },
      {
        path: 'playerRegsiter',
        component: PlayerComponent
      },
      {
        path: 'updatePlayer',
        component: UpdatePlayerComponent,
        canActivate: [UpdatePlayerGuard]
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
