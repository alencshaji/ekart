import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:['',[Validators.required]],
    psw:['',[Validators.required]],
  })
  constructor(private fb:FormBuilder,private db:DataserviceService,private route:Router){}
  ngOnInit(): void {
    
  }
  userLogin(){
    this.db.userLogin(this.loginForm.value.email,this.loginForm.value.psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("user",result._id)
        this.route.navigateByUrl("")
        this.db.header()
        this.db.cartCountUpdate() 
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })
  }
}
