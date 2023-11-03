import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import analytics from './fb_config';

function uploadProfileImage(filePath:any,fileName:any,file:any,getUrl:any,progressGet:any){
    const storageRef = ref(analytics,`${filePath}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadTask.on(
        'state_changed',
        (snapshot)=>{

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            progressGet(progress);
            switch(snapshot.state){
                case 'paused':
                    break;
                case 'running':
                    break;
            }
        },
        (error)=>{

        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              getUrl(downloadURL);
            });
          }
    )

}
export default uploadProfileImage;