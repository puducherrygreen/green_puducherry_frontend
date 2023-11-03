import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { InitialHomePageComponent } from './initial-home-page/initial-home-page.component';
import { LoginComponent } from './login/login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMessageComponent } from './dashboard-message/dashboard-message.component';
import { EnableNextPhotoComponent } from './enable-next-photo/enable-next-photo.component';
import { UserQueryComponent } from './user-query/user-query.component';
import { QueryResponseComponent } from './query-response/query-response.component';
import { QueryReplayPageComponent } from './query-replay-page/query-replay-page.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule }from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    AdminHomepageComponent,
    InitialHomePageComponent,
    LoginComponent,
    AdminViewComponent,
    SendNotificationComponent,
    DashboardComponent,
    DashboardMessageComponent,
    EnableNextPhotoComponent,
    UserQueryComponent,
    QueryResponseComponent,
    QueryReplayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
