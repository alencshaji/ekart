import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registerForm = this.fb.group({
    username:[''],
    email:[''],
    psw:[''],
  })

constructor(private db:DataserviceService,private route:Router,private fb: FormBuilder){

}
  register(){
    this.db.userRegister(this.registerForm.value.username,this.registerForm.value.email,this.registerForm.value.psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.route.navigateByUrl("user-login")
      },
      error:(result:any)=>{
        alert(result.message)
      }
    })
  }
}
