import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent {
  constructor(public api: ApiService){}

  notificationForm:any;
  commune:any
  region:any
  regionId:any;
  isLoading = false;
  ngOnInit(){
    this.getregion();
    this.notificationForm = new FormGroup({
      title: new FormControl(),
      message: new FormControl(),
      regionId: new FormControl('All'),
      communeId: new FormControl('All'),
      status: new FormControl('All')
    })
  }
  getregion(){
    this.api.getRegionData().subscribe((res:any)=>{
      this.region = res;
    })
  }
  getregionId(eve:any){
   this.regionId= eve.target.value;
   this.getCommune()
  }
  getCommune(){
    this.api.getCommuneData(this.regionId).subscribe((res:any)=>{
      this.commune = res
    })
  }
  createNotification(){
    this.isLoading = true;
    this.api.createNotification(this.notificationForm.value).subscribe((res:any)=>{
      this.isLoading = false;
      this.api.openSnackBar("Notification sent","close")
      this.notificationForm.reset();
    })
  }
}
