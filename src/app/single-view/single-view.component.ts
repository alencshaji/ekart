import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  pdata: any = []
  pid: any = []
  uid: any = ''
  products:any=[]
  similarP:any=[]
  constructor(private db: DataserviceService, private route: Router, private ar: ActivatedRoute) { }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id;
      console.log('Product ID:', this.pid);

      this.singleView()
      this.otherProduct()
    });
  }

singleView(){
  this.db.getProduct(this.pid).subscribe({
    next: (result: any) => {
      this.pdata = result.message
    },
    error: (error) => {
      console.error('Error fetching product:', error);
    }
  });
}
otherProduct() {
  this.db.getAllproduct().subscribe({
    next: (result: any) => {
      this.products = result.message;
      this.similarP = this.products.filter((pdct:any) => pdct.category === this.pdata.category);
    }
  });
}


  addtoWishlist() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.db.addToWishlist(this.uid, this.pid).subscribe({
        next: (result: any) => {
          alert(result.message)
        },
        error: (result: any) => {
          alert(result.message)
        }
      })
    } else {
      alert("Please login to continue");
      this.route.navigateByUrl("user-login");
    }
  }
  addToCart() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.db.addToCart(this.uid, this.pid).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.db.cartCountUpdate()
        }
      })
    } else {
      alert("Please login to continue");
      this.route.navigateByUrl("user-login");
    }

  }



}