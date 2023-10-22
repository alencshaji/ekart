import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-admin-productmng',
  templateUrl: './admin-productmng.component.html',
  styleUrls: ['./admin-productmng.component.css']
})
export class AdminProductmngComponent implements OnInit {
  pdata: any = []

  constructor(private route: Router, private db: DataserviceService) { }
  ngOnInit(): void {
    this.db.getAllproduct().subscribe({
      next: (result: any) => {
        this.pdata = result.message
      }
    })

  }

  addProduct() {
    this.route.navigateByUrl("admin-addProduct")
  }
  edit(id: any) {
    this.route.navigate(['admin-editProduct', id]);
  }
  

  delete(id: any) {
    const confirmed = confirm("Are you sure you want to delete this product?")
    if(confirmed){
      this.db.deleteProduct(id).subscribe({
        next: (result: any) => {
          alert("Deleted")
          this.ngOnInit()
        }
      })
    }
   
  }



}
