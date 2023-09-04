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
  if(!(this.user.name.length>=3&&this.user.name.length<=20&&
    this.user.address.length>=3 && this.user.address.length<=20)){
      this.disp_msg="Invalid Input";
}else{
    this.bankservice.accountrequest(this.user).subscribe({
      next:(_data: any)=>{
        localStorage.setItem("new","Account created successfully")
        this.router.navigate(["/accountslist"])},
      error:err=>{
        console.log(err)
        console.log(err.error)
        this.disp_msg=err.error
      }
        
     })
   }
}


}