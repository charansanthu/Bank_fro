import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { accountrequest, editaccountdetails } from '../User';
import { BankServiceService } from '../bank-service.service';
import {search} from '../User';

@Component({
  selector: 'app-view-account-details',
  templateUrl: './view-account-details.component.html',
  styleUrls: ['./view-account-details.component.css']
})


  export class ViewAccountDetailsComponent implements OnInit {
    @Input()
    account: accountrequest;
    user:editaccountdetails
    disp_msg: string;
    constructor(private formbuilder:FormBuilder , private bankservice:BankServiceService , private router:Router) { 
      this.user=new editaccountdetails();
    }
    form:FormGroup
    ngOnInit(): void {
      console.log(localStorage.getItem("view"))
      this.bankservice.searchrequest(localStorage.getItem("view")).subscribe({
        next:(data: any)=>{
         this.account=data;}
        });
    }
    editaccount(accountnumber: number){
      localStorage.setItem("edit",accountnumber.toString())
      console.log(localStorage.getItem("edit"))
      this.router.navigate(["/editaccount"])
    }   
}