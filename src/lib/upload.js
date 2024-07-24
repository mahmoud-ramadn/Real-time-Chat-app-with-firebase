import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
const upload = async(file) => {


    const date=new Date()
    const storageRef = ref(storage,`images/${date+file.name}`);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    

    return new Promise((reolve, rect)=> {
    
    
        uploadTask.on('state_changed', 
            (snapshot) => {
           
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
          
            }, 
            (error) => {
            rect('somethin went wrong ' + error.code)
            }, 
            () => {
            
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  reolve(downloadURL)
                console.log('File available at', downloadURL);
              });
              }
            
            
            
            
            
          );
});


   
}

export default upload