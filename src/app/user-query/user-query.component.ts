import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent {
  constructor( public api:ApiService){}

  seachText= ''
  ngOnInit(){
    this.getQueryData()
  }
  query:any
  getQueryData(){
    this.api.getQuery().subscribe((res:any)=>{
      this.query = res;
      console.log(this.query,"this.query")
    })
  }
}
