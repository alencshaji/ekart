import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  pdata: any = [];
  id: any = [];

  constructor(private db: DataserviceService, private ar: ActivatedRoute, private route:Router) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id;
      console.log('Product ID:', this.id);
  
      this.db.getProduct(this.id).subscribe({
        next: (result: any) => {
          this.pdata = result.message;
          console.log('Product Data:', this.pdata);
        },
        error: (error) => {
          console.error('Error fetching product:', error);
        }
      });
    });
  }
  

  update() {
    this.db.editProduct(this.id,this.pdata).subscribe({
      next:(result:any)=>{
        alert("updated")

      }
    })
  }
}
