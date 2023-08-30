import { Component, Input } from '@angular/core';
import { accountrequest } from '../User';
import { search } from '../User'
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountslist',
  templateUrl: './accountslist.component.html',
  styleUrls: ['./accountslist.component.css']
})
export class AccountslistComponent {
isDisabled: any;
@Input()
accountrequest: accountrequest;
  constructor(private router:Router){
    
  }

  editaccount(accountnumber: number){
    localStorage.setItem("edit",accountnumber.toString())
    console.log(localStorage.getItem("edit"))
    this.router.navigate(["/editaccount"])
  }
  viewaccount(accountnumber: number){
    localStorage.setItem("view",accountnumber.toString())
    console.log(localStorage.getItem("view"))
    this.router.navigate(["/viewaccountdetails"])
  }
}
