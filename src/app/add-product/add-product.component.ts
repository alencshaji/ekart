import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


 
  ngOnInit(): void {
   
  }

  addProductForm = this.fb.group({
    pname:[''],
    category:[''],
    price:[''],
    image:['']
  })
constructor(private db :DataserviceService , private fb:FormBuilder){}
  addNewproduct(){
    const path = this.addProductForm.value
    const bodyData = {
      pname: path.pname,
      category: path.category,
      price:path.price,
      image:path.image
    }
    this.db.addProduct(bodyData).subscribe({
      next :(result:any)=>{
        alert("Product added")
        this.addProductForm.reset()
      }
    })


  }
}
