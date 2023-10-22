import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-admin-usermng',
  templateUrl: './admin-usermng.component.html',
  styleUrls: ['./admin-usermng.component.css']
})
export class AdminUsermngComponent implements OnInit {

  uData: any = []

  constructor(private db: DataserviceService) { }

  ngOnInit(): void {
   this.userDetails()
  }
  userDetails(){
    this.db.userMng().subscribe({
      next: (data: any) => {
        console.log(data);
        
        this.uData = data.message
      }
    })
  }
  delete(id: any) {
    // Display a confirmation dialog
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      // User confirmed deletion
      this.db.deleteUser(id).subscribe({
        next: (result: any) => {
          alert('Deleted');
          this.ngOnInit();
        }
      });
    }
  }

}
