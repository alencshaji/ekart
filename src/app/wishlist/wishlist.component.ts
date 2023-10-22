import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  pdata:any=[];
  pid: any = []
  userid: any = '';
  constructor(private db: DataserviceService,private route :Router){}

  ngOnInit(): void {
    this.wishlist()
    }



    wishlist(){
      if (localStorage.getItem("user")) {
        this.userid = localStorage.getItem("user");
        this.db.wishlistproducts(this.userid).subscribe({
          next: (data: any) => {
            this.pdata=data.message
           
          },
          error: (error: any) => {
            alert(error)
          }
        });
      }
    }

    removeItem(pid:any){
      this.db.wishlistremoveitem(pid).subscribe({
        next:(data:any)=>{
          this.wishlist()
        }
      })

    }
    addToCart() {
      if (localStorage.getItem("user")) {
        this.userid = localStorage.getItem("user")
        this.db.addToCart(this.userid , this.pid).subscribe({
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
