import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public api: ApiService,public router: Router){}
  

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['../admin-login'])
  }

}
