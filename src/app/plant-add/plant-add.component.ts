import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.css']
})
export class PlantAddComponent {
  constructor(public api:ApiService){}

  isLoading = false;
  addPlantForm:any;
  ngOnInit(){
    this.addPlantForm = new FormGroup({
      plantName: new FormControl(),
      plantLand: new FormControl()
    })
    this.getPlantLand();
  }
  addPlant(){
    this.isLoading = true;
    this.api.addPlant(this.addPlantForm.value).subscribe((res:any)=>{
      this.isLoading = false;
      this.addPlantForm.reset();
    })
  }
  land: any;
  getPlantLand() {
    this.api.getPlantLand().subscribe((res: any) => {
      this.land = res
    })
  }
}
