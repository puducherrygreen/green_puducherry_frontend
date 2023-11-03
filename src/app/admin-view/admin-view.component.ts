import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  constructor(public api:ApiService){}
  ngOnInit(){
    this.viewUserData();
    this.getOverAllCount();
    this.getRegionCount();
  }

  data:any;
  images:any
  viewUserData(){
    this.api.adminViewAll().subscribe((res:any)=>{
      this.data = res;
      console.log(this.data,"this.data")
    })
  }
  // 

  overAllCountSapled= 0;
  puducherry= 0;
  karaikal= 0;
  mahe = 0;
  yanam = 0;
  dataDetails:any;
  seachText = ''
  getOverAllCount(){
    this.api.overAllSapledCount().subscribe((res:any)=>{
      this.overAllCountSapled = res.count
    })
  }
  getRegionCount(){
    this.api.regionCount().subscribe((res:any)=>{
      console.log(res,"regionscount")
      this.dataDetails =res[0];
      this.puducherry = this.dataDetails.puducherry;
      this.karaikal=this.dataDetails.karaikal;
      this.mahe = this.dataDetails.mahe;
      this.yanam = this.dataDetails.Yanam;
    })
  }

  download(){

    const replacer = (key: any, value: any) => (value === null ? '' : value);
    const header = Object.keys(this.data[0]);
    const maxCellWidth = 80; // Set your desired cell width

    let csv = this.data.map((row: { [x: string]: any }) => {
      return header
        .map((fieldName) => {
          const cellValue = JSON.stringify(row[fieldName], replacer);
          // Pad cell value with spaces to make it equal width
          const paddedCellValue = cellValue.padEnd(maxCellWidth);
          return paddedCellValue;
        })
        .join(',');
    });
    csv.unshift(
      header.map((fieldName) => fieldName.padEnd(maxCellWidth)).join(',')
    ); // Pad headers to match cell width
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, 'UserPlant.csv');

}
}