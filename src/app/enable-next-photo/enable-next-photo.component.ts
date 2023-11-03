import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enable-next-photo',
  templateUrl: './enable-next-photo.component.html',
  styleUrls: ['./enable-next-photo.component.css']
})
export class EnableNextPhotoComponent {
  constructor(public api: ApiService){}

  isLoading= false;
  isLoadingdis = false
  enablePhotoForm:any;
  ngOnInit(){
    this.getregion();
    this.enablePhotoForm= new FormGroup({
      status : new FormControl('All'),
      communeId: new FormControl('All'),
      regionId: new FormControl('All')
    })
  }
  commune:any
  region:any
  regionId:any
  getregion(){
    this.api.getRegionData().subscribe((res:any)=>{
      this.region = res;
      console.log(this.region,"region")
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
  enable(){
    const a = {
      nextPhotoEnabled: true
    }
    this.isLoading = true;
    this.api.photoEnable({...this.enablePhotoForm.value,...a}).subscribe((res:any)=>{
      this.isLoading = false;
      // this.enablePhotoForm.reset();
      this.api.openSnackBar("Enabled the next photo upload","close")
      window.location.reload()
    })
  }
  disable(){
    const a = {
      nextPhotoEnabled: false
    }
    this.isLoadingdis= true
    this.api.photodisable({...this.enablePhotoForm.value,...a}).subscribe((res:any)=>{
      this.isLoadingdis= false;
      this.api.openSnackBar("Disabled the next photo upload","close")
      window.location.reload()
    })
  }
}
