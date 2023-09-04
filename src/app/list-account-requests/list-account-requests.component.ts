import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { accountrequest, editaccountdetails } from '../User';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-list-account-requests',
  templateUrl: './list-account-requests.component.html',
  styleUrls: ['./list-account-requests.component.css']
})

  export class ListAccountRequestsComponent implements OnInit {
    accountlist: Array<accountrequest>;
    user:editaccountdetails
  disp_msg: string | null;
    constructor(private formbuilder:FormBuilder , private bankservice:BankServiceService , private router:Router) { 
      this.user=new editaccountdetails();
    }
    form:FormGroup
    ngOnInit(): void {
      this.disp_msg=localStorage.getItem("new")
      localStorage.removeItem("new")
      this.bankservice.accountslist().subscribe(data =>{
       this.accountlist=data;
       console.log(data)
      });
    }
    viewaccount(accountnumber: number){
      localStorage.setItem("view",accountnumber.toString())
      console.log(localStorage.getItem("view"))
      this.router.navigate(["/viewaccountdetails"])
    }
    editaccount(accountnumber: number){
      localStorage.setItem("edit",accountnumber.toString())
      console.log(localStorage.getItem("edit"))
      this.router.navigate(["/editaccount"])
    }
}