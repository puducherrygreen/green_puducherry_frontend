import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:  HttpClient,private snackBar: MatSnackBar) { }

  baseurl= "https://us-central1-green-puducherry.cloudfunctions.net/app"

  getImagesHome(){
    return this.http.get(this.baseurl+'/v1/admin/get/images/home');
  }
  deleteImage(id:any,data:any){
    return this.http.put(this.baseurl+'/v1/admin/delete/image/home/'+id,data)
  }
  uploadImage(data:any){
    return this.http.post(this.baseurl+'/v1/admin/add/images/homePage',data)
  }
  adminViewAll(){
    return this.http.get(this.baseurl+'/v1/admin/get/user/all');
  }
  adminLogin(data:any){
    return this.http.post(this.baseurl+'/v1/admin/admin/login',data)
  }
  imageSelected(){
    return this.http.get(this.baseurl+'/v1/admin/get/admin/gallery/selected')
  }
  getNotSelected(){
    return this.http.get(this.baseurl+'/v1/admin/get/admin/gallery/notSelect')
  }
  updateImageSelect(id:any,data:any){
    return this.http.put(this.baseurl+'/v1/admin/admin/gallery/'+id,data)
  }
  getRegionData(){
    return this.http.get(this.baseurl+ '/v1/user/get/region/list')
  }
  getQuery(){
    return this.http.get(this.baseurl+"/v1/admin/get/query/admin")
  }
  getUserQueryByPassingId(id:any){
    return this.http.get(this.baseurl+'/v1/admin/get/user/query/response/ById/'+id)
  }
  getCommuneData(id:any){
    return this.http.get(this.baseurl+"/v1/user/get/commune/byRegionId/"+id)
  }
  getUserqueryForRes(id:any){
    return this.http.get(this.baseurl+ '/v1/admin/get/query/'+id);
  }
  createNotification(data:any){
    return this.http.post(this.baseurl+ '/v1/admin/create/notification',data);
  }
  photoEnable(data:any){
    return this.http.post(this.baseurl+"/v1/admin/enable/next/photo",data)
  }
  photodisable(data:any){
    return this.http.post(this.baseurl+"/v1/admin/enable/next/photo",data)
  }
  overAllSapledCount(){
    return this.http.get(this.baseurl+"/v1/admin/get/count/overAll")
  }
  regionCount(){
    return this.http.get(this.baseurl+"/v1/admin/get/count/ByRegion")
  }
  getQueryById(id:any){
    return this.http.get(this.baseurl+"/v1/admin/get/user/query/byQueryId/"+id)
  }
  updateResponse(id:any,data:any){
    return this.http.put(this.baseurl+"/v1/admin/update/response/data/"+id,data)
  }
  deleteImageForQuery(id:any){
    return this.http.delete(this.baseurl+ '/v1/admin/delete/image/userQuery/'+id)
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Set the duration in milliseconds
    });
  }
}
