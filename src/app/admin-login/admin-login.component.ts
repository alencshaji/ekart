import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
constructor(private fb:FormBuilder,private route:Router,private db:DataserviceService){}


  adminForm = this.fb.group({
    auname:['', [Validators.required]],
    apsw:['', [Validators.required]],
  })


 loginF() {
    var uname = this.adminForm.value.auname;
    var psw = this.adminForm.value.apsw;
    if (this.adminForm.valid) {
      this.db.login(uname, psw).subscribe({
        next: (result: any) => {
          alert(result.message);
          this.route.navigateByUrl("admin-home");
        },
        error: (result: any) => {
          alert(result.error.message);
        }
      });
    } else {
      alert("Invalid login form");
    }
  }
}
