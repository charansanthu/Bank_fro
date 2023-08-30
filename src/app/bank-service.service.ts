import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { accountrequest } from './User';


@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  Editaccount:string;
  Createaccount:string;
  Getallaccounts:string;
  GetAccountByAccountNumber:string;

  constructor(private httpClient:HttpClient, private router: Router) { 

   this.Editaccount='http://localhost:7073/bank/editaccount/';
   this.Createaccount='http://localhost:7073/bank/createaccount';
   this.Getallaccounts='http://localhost:7073/bank/getallaccounts';
   this.GetAccountByAccountNumber='http://localhost:7073/bank/getaccountbyac';
    
}

accountrequest(newUser:any) {
  console.log(newUser)

 return this.httpClient.post(this.Createaccount, newUser);
}


editaccount(newUser:any) {
  console.log(newUser)
console.log(this.Editaccount+newUser.accountnumber)
 return this.httpClient.put(this.Editaccount+newUser.accountnumber, newUser);
}


searchrequest(accountnumber:any) :Observable<accountrequest>{
  console.log(accountnumber)
 return this.httpClient.get<accountrequest>(this.GetAccountByAccountNumber+"/"+accountnumber);
}

  accountslist(): Observable<accountrequest[]> {
    
  return this.httpClient.get<accountrequest[]>(this.Getallaccounts);
  }

  viewaccount(newUser:any) {
    console.log(newUser)
  const url = '';
  return this.httpClient.post(this.GetAccountByAccountNumber, newUser);
  }
}
