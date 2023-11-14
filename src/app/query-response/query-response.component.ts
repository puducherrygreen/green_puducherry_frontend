import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-response',
  templateUrl: './query-response.component.html',
  styleUrls: ['./query-response.component.css']
})
export class QueryResponseComponent {
  constructor(public api: ApiService,public router: Router,public route: ActivatedRoute){}

  ngOnInit(){

    this.route.queryParams.subscribe((res:any)=>{
      this.userId = res.id;
      console.log(this.userId)

    })
    this.getUserQueryById(this.userId);
  }
  userId:any
  data:any;
  userName:any;
  region:any;
  regionName:any;
  cummune:any;
  plantName:any;
  firstSapledDate:any;
  plantStatus:any;
  imageData:any;
  plantDetails:any;
  plantImages:any;
  getUserQueryById(id:any){
    this.api.getUserQueryByPassingId(this.userId).subscribe((res:any)=>{
      this.data = res;
      this.region = this.data.region.regionName;
      this.cummune = this.data.commune.communeName;
      this.userName = this.data.userName;
      this.plantDetails = this.data.plantDetailsData;
      this.plantImages = this.data.plantDetailsData.plantImagesData
      // this.plantName = this.data.plantDetailsData.plantName;
      //  this.firstSapledDate= this.data.plantDetailsData.date;
      //  this.plantStatus = this.data.plantDetailsData.status;
      //  this.imageData = this.data.plantDetailsData.plantImagesData

    })

  }

}
