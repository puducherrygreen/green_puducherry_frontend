import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import uploadProfileImage from '../firebase/fb_image';

@Component({
  selector: 'app-dashboard-message',
  templateUrl: './dashboard-message.component.html',
  styleUrls: ['./dashboard-message.component.css']
})
export class DashboardMessageComponent {
  uploadImage: FormGroup;
  imagesArray: any[] = []; 
  images: any;
  // photoimage: null;

  constructor( public api: ApiService,private formBuilder: FormBuilder){
    this.uploadImage = this.formBuilder.group({
      images: this.formBuilder.array([])
    });
  }
  ngOnInit(){
    // this.getImages();
    this.getImagesSelected();
  }

removeImage(id:any,data:any) {
  this.api.deleteImage(id,data).subscribe((res:any)=>{
    this.api.openSnackBar('Image removed',"close")
    this.getImagesSelected();
  })
}
selectedImages:any

getImagesSelected(){
  if(this.selectButtonEnable == false){
  this.api.imageSelected().subscribe((res:any)=>{
    this.selectedImages = res
    console.log(this.selectedImages,"selected")
    

  })
}
}
notSelectedImages:any
getNotSelectedImage(){
  if(this.selectButtonEnable==true){
    this.api.getNotSelected().subscribe((res:any)=>{
      this.notSelectedImages = res;
      console.log(this.notSelectedImages,"this.notSelectedImages")
    })
  }
 
}
selectButtonEnable=false;
selectFiles(){
  console.log(this.selectButtonEnable,"this.selectButtonEnable")
  this.selectButtonEnable = true
  this.getNotSelectedImage();
}
selectPut(id:any,data:any){
  this.api.updateImageSelect(id,data).subscribe((res:any)=>{
    this.api.openSnackBar('Image selected',"close")
    this.getNotSelectedImage();
  })
}

// selectFiles(event: any): void {

//   const files = event.target.files;
//     const imagesControl = this.uploadImage.get('images') as FormArray;

//     if (files) {
//       const uploadPromises = [];
//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         imagesControl.push(this.formBuilder.control(file));

//         if (file.type === 'image/png' || file.type === 'image/jpeg') {
//           const promise = new Promise((resolve, reject) => {
//             // Assuming you have an 'uploadProfileImage' function for Firebase upload
//             uploadProfileImage('photo', file.name, file, (url: any) => {
//               resolve(url);
//             }, (progressGet: any) => {
//               // Handle progress if needed
//             });
//           });
//           uploadPromises.push(promise);
//         }
//       }

//       Promise.all(uploadPromises).then((urls) => {
//         this.imagesArray = urls.map((url) => ({ images: url }));

//         // Now, you can send the data to the server if needed
//         this.api.uploadImage(this.imagesArray).subscribe((res: any) => {
//           this.getImages();
//         });
//       });
//     }
    
//   }
   
  }

  






// this.photoimage = null;
//     const res = file.target.files[0] as File;
//     if (res != null) {
//       if (res.type == 'image/png' || res.type == 'image/jpeg') {
//         uploadprofileImage(
//           'photo',
//           res.name,
//           res,
//           (url: any) => {
//             this.photoimage = url;
//             console.log(this.photoimage, 'this.categoryiamge');
//           },
//           (progressGet: any) => {
//             this.progressreport = progressGet;
//           }
//         );
//       }
//       // if(res.type == 'image/png' || res.type == 'image/jpeg'){
//       //   this.photoimage = res;

//       // }
//     }