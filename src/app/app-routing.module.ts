import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { InitialHomePageComponent } from './initial-home-page/initial-home-page.component';
import { LoginComponent } from './login/login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { DashboardMessageComponent } from './dashboard-message/dashboard-message.component';
import { EnableNextPhotoComponent } from './enable-next-photo/enable-next-photo.component';
import { UserQueryComponent } from './user-query/user-query.component';
import { QueryResponseComponent } from './query-response/query-response.component';
import { QueryReplayPageComponent } from './query-replay-page/query-replay-page.component';
import { AuthGuardGuard } from './authGuard/auth-guard.guard';

const routes: Routes = [
 
  {
    path:"",component: InitialHomePageComponent
  },
  {
    path:'admin-login',component: LoginComponent
  },
  {
    path: 'view-all',component: AdminViewComponent, canActivate:[AuthGuardGuard]
  },
  {
    path:"send-notification",component: SendNotificationComponent, canActivate:[AuthGuardGuard]
  },
  {
    path:"dashboard-message",component:DashboardMessageComponent, canActivate:[AuthGuardGuard]
  },
  {
    path:"next-photo",component:EnableNextPhotoComponent, canActivate:[AuthGuardGuard]
  },
  {
    path: 'user-query',component: UserQueryComponent, canActivate:[AuthGuardGuard]
  },
  {
    path:"view-details",component:QueryResponseComponent, canActivate:[AuthGuardGuard]
  },
  {
    path:'query-response',component:QueryReplayPageComponent, canActivate:[AuthGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
