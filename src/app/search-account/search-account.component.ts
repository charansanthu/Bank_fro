import { Component, OnInit } from '@angular/core';
import { accountrequest, search } from '../User';
import { FormBuilder } from '@angular/forms';
import { BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {
  account:accountrequest
  user:search
  disp_msg: string;
  constructor(private formbuilder:FormBuilder , private bankservice:BankServiceService , private router:Router){
    this.user=  new search();
  }
  ngOnInit(): void {
  }


 searchrequest(){
    console.log(""+this.user.accountnumber)
    localStorage.setItem("view",this.user.accountnumber.toString())
    this.bankservice.searchrequest(this.user.accountnumber).subscribe({
      next:data =>{
        this.router.navigate(["/viewaccountdetails"])
      },
      error:err=>{
        this.disp_msg=err.error
      }
    })
 }
}