import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  products:any=[]
  constructor(private db:DataserviceService){}
  ngOnInit(): void {
    this.db.getAllproduct().subscribe({
      next:(result:any)=>{
        this.products=result.message
      }
    })
  }
 

  
}
