import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { error } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userid: any = '';
  pid:any=''
  count: any = 0;
  pdata:any=[];
  totalPrice:Number=0
  login:any=false
  carti:any=false
  wish:any=false
  

  constructor(private db: DataserviceService,private route :Router) {}

  ngOnInit(): void {

   this.allData()

  }

  allData(){
    this.db.cartCount.subscribe((data: any) => {
      this.count = data;
      console.log(this.count);
    });

    this.db.logIn.subscribe((logdata:any)=>{
      this.login=logdata
    })
    this.db.carti.subscribe((data:any)=>{
      this.carti = data
    })
    this.db.wish.subscribe((data:any)=>{
      this.wish = data
    })
  }
  wishList(){
    if (localStorage.getItem("user")) {
      this.userid = localStorage.getItem("user");
      this.route.navigateByUrl("/wishlist/"+this.userid)
    }
  }

  cartitems() {
    if (localStorage.getItem("user")) {
      this.userid = localStorage.getItem("user");
      this.db.cartItems(this.userid).subscribe({
        next: (data: any) => {
          this.pdata=data.message
         this.marginPrice()
         this.db.cartCountUpdate()
          
        },
        error: (error: any) => {
          alert(error)
        }
      });
    }
  }
  
  marginPrice(){
    let totalPrice = 0
    for (const item of this.pdata) {
      totalPrice += item.price * item.quantity;
    }
    this.totalPrice = totalPrice;
  }

  increment(pid:any){
   this.db.cartQtnIncre(pid).subscribe({
    next:(result:any)=>{

      this.marginPrice()
    }
   })


  }
  decrement(pid:any){
    this.db.cartQtnDecre(pid).subscribe({
      next:(result:any)=>{
      this.ngOnInit()
      }
    })


  }
  remove(id:any){
    console.log(id);
    
    this.db.remove(id).subscribe({
      next:(result:any)=>{
        this.cartitems()
        this.marginPrice()
      },
    })
  }
  logout(){
    localStorage.removeItem("user")
    this.db.logIn.next(false)
    this.db.carti.next(false)
    this.db.wish.next(false)
    this.route.navigateByUrl("")
  }


}
