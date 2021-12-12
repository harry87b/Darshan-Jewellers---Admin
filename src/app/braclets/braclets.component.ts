import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {getFirestore, collection, addDoc , setDoc, doc, Timestamp} from '@firebase/firestore';
import {getStorage, ref, uploadBytes,getDownloadURL} from '@firebase/storage'
import { DBService } from '../db.service';

@Component({
  selector: 'app-braclets',
  templateUrl: './braclets.component.html',
  styleUrls: ['./braclets.component.css']
})
export class BracletsComponent implements OnInit {

  tempImgFile: any;

  ProductForm = new FormGroup(
    {
      name:new FormControl(''),
      category:new FormControl(''),
      image:new FormControl(''),

  })

  constructor(private db:DBService){}

  ngOnInit(): void {
  }
  
  onFileSelect(event: any){
    this.tempImgFile = event.target.files[0];
  }
  
  uploadImageToFirebase(){
    const metadata = {
      contentType: 'image/jpg',
    };
    const filePath = this.tempImgFile;
    const storageReference = getStorage();
    const productImageReference = ref(storageReference,"Braclets/"+this.tempImgFile.name);    
    uploadBytes(productImageReference,filePath,metadata).then((uploadResult)=>{
      console.log("Image uploaded succesfully"); 
      getDownloadURL(uploadResult.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        const firestoreDB = getFirestore(this.db.app);
        const BraceletCollection = collection(firestoreDB, 'Bracelet');
        addDoc(BraceletCollection,{title:this.ProductForm.value.name,image_url:downloadURL,weight:this.ProductForm.value.category})
        })
    });

    
  }

  addProductToFirebase() {
    console.log(this.ProductForm.value);
    this.uploadImageToFirebase();
  }
  

}
