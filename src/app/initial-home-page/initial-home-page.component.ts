import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-initial-home-page',
  templateUrl: './initial-home-page.component.html',
  styleUrls: ['./initial-home-page.component.css']
})
export class InitialHomePageComponent {
  constructor(public api:ApiService){}
  ngOnInit(){
    this.getOverAllCount();
    this.getRegionCount();
  }
  overAllCountSapled= 0;
  puducherry= 0;
  karaikal= 0;
  mahe = 0;
  yanam = 0;
  data:any
  getOverAllCount(){
    this.api.overAllSapledCount().subscribe((res:any)=>{
      this.overAllCountSapled = res.count
    })
  }
  getRegionCount(){
    this.api.regionCount().subscribe((res:any)=>{
      console.log(res,"regionscount")
      this.data =res;
      this.puducherry = this.data.puducherry;
      this.karaikal=this.data.karaikal;
      this.mahe = this.data.mahe;
      this.yanam = this.data.Yanam;
    })
  }

}
