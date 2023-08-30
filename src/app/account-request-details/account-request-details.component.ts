import { Component, OnInit } from '@angular/core';
import { accountrequest } from '../User';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-request-details',
  templateUrl:'./account-request-details.component.html',
  styleUrls: ['./account-request-details.component.css']
})
export class AccountRequestDetailsComponent implements OnInit {
 user:accountrequest
  constructor(private formbuilder:FormBuilder , private bankservice:BankServiceService , private router:Router) { 
  this.user=new accountrequest();

 
  }
  form:FormGroup
  disp_msg: string;
  ngOnInit(): void {
  }
  
 accountrequest() {
  
  console.log(this.user);
  this.bankservice.accountrequest(this.user).subscribe({
    next:(_data: any)=>{this.disp_msg=" "+this.user.name+" your account created successfully";this.router.navigate(["/accountslist"])},
      error:(e: any)=>{console.log(e);this.disp_msg="Failed to create account ";
      
  }
   })

  
   
}


}