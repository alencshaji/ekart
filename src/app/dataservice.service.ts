import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  uid: any = ''

  cartCount = new BehaviorSubject(0);
  logIn = new BehaviorSubject(false)
  carti= new BehaviorSubject(false)
  wish = new BehaviorSubject(false)
  constructor(private http: HttpClient) {
    this.cartCountUpdate()
    this.header()

  }


  baseUrl: any = "https://ekartserver.onrender.com/"

  header() {
    if (localStorage.getItem("user")) {
      this.logIn.next(true)
      this.carti.next(true)
      this.wish.next(true)
    }
  }
  login(uname: any, psw: any) {
    const bodyData = { uname, psw };
    return this.http.post(`${this.baseUrl}admin/login`, bodyData)

  }

  addProduct(body: any) {
    return this.http.post(`${this.baseUrl}admin/addProduct`, body)

  }
  getAllproduct() {
    return this.http.get(`${this.baseUrl}admin/getProduct`)
  }
  editProduct(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}admin/editProduct/` + id, bodyData)
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.baseUrl}admin/deleteProduct/${id}`)
  }
  getProduct(id: any) {
    return this.http.get(`${this.baseUrl}admin/getOneProduct/${id}`)
  }
  userRegister(username: any, email: any, psw: any) {
    const body = { username, email, psw }
    return this.http.post(`${this.baseUrl}new-user`, body)
  }
  userLogin(email: any, psw: any) {
    const body = { email, psw }

    return this.http.post(`${this.baseUrl}user-login`, body)
  }
  addToCart(userId: any, pId: any) {
    const body = {
      userId, pId
    }
    return this.http.post(`${this.baseUrl}addtocart`, body)
  }
  addToWishlist(userId: any, pId: any) {
    const body = {
      userId, pId
    }
    return this.http.post(`${this.baseUrl}addtowishlist`, body)
  }
  cartItems(userId: any) {
    return this.http.get(`${this.baseUrl}cart/cartitems/${userId}`)
  }
  cartCountUpdate() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.http.get(`${this.baseUrl}addtocart/count/${this.uid}`).subscribe({
        next: (result: any) => {
          this.cartCount.next(result.message)

        }
      })
    }
  }
  cartQtnIncre(pid: any) {
    return this.http.get(`${this.baseUrl}cart/cartqtyadd/${pid}`)
  }
  cartQtnDecre(pid: any) {
    return this.http.get(`${this.baseUrl}cart/cartqtydec/${pid}`)
  }
  remove(id: any) {
    return this.http.delete(`${this.baseUrl}cart/removecart/${id}`)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.baseUrl}user/delete/${id}`)
  }
  wishlistproducts(id:any){
    return this.http.get(`${this.baseUrl}wishlistitems/${id}`)
  }
  wishlistremoveitem(id:any){
    return this.http.delete(`${this.baseUrl}wishlistitemremove/${id}`)
  }
  userMng(){
    return this.http.get(`${this.baseUrl}admin/userMng`)
  }

}
