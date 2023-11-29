import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-query-replay-page',
  templateUrl: './query-replay-page.component.html',
  styleUrls: ['./query-replay-page.component.css'],
})
export class QueryReplayPageComponent {
  constructor(
    public api: ApiService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  responseForm: any;
  isLoading = false;
  ngOnInit() {
    this.route.queryParams.subscribe((res: any) => {
      this.userId = res.id;
      this.queryId = res.queryId;
    });
    this.getUserQueryById(this.userId);
    this.queryGetById();
    this.responseForm = new FormGroup({
      response: new FormControl(),
    });
  }
  queryId: any;
  userId: any;
  data: any;
  userName: any;
  region: any;
  regionName: any;
  cummune: any;
  plantName: any;
  firstSapledDate: any;
  plantStatus: any;
  imageData: any;
  query: any;
  getUserQueryById(id: any) {
    this.api.getUserqueryForRes(this.userId).subscribe((res: any) => {
      this.data = res;
      this.region = this.data.region.regionName;
      this.cummune = this.data.commune.communeName;
      this.userName = this.data.userName;
      this.plantName = this.data.plantDetailsData.plantName;
      this.firstSapledDate = this.data.plantDetailsData.date;
      this.plantStatus = this.data.plantDetailsData.status;
      this.imageData = this.data.plantDetailsData;
      console.log(this.imageData,"this.imageData")
      //  this.query = this.data.queryData
    });
  }
  queryData: any;
  queryGetById() {
    this.api.getQueryById(this.queryId).subscribe((res: any) => {
      this.queryData = res[0].query;
      console.log(this.queryData, 'this.queryData');
    });
  }
  response() {
    const data = {
      readStatus: 'responded',
      responseDate: new Date(),
    };
    this.isLoading = true;
    this.api
      .updateResponse(this.queryId, { ...this.responseForm.value, ...data })
      .subscribe((res: any) => {
       
        this.isLoading = false;
        this.api.openSnackBar('sent response',"close")
      });
  }
  currentImageId: any;
   setCurrentImageId(imageId: any) {
     this.currentImageId = imageId;
  }
  removeImage() {
    console.log(this.currentImageId,"iddd")
    this.api.deleteImageForQuery(this.currentImageId).subscribe((res:any)=>{
      this.api.openSnackBar('Image Deleted',"close")
      window.location.reload()
      this.getUserQueryById(this.userId);
    })
  }
}
