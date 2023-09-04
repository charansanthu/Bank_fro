import { Component, OnInit} from '@angular/core';
import { accountrequest, editaccountdetails} from '../User'
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BankServiceService } from '../bank-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account-details',
  templateUrl: './edit-account-details.component.html',
  styleUrls: ['./edit-account-details.component.css']
})
export class EditAccountDetailsComponent implements OnInit {
   edit:accountrequest
  disp_msg: string;
  isDisabled: false;
  constructor(private formbuilder:FormBuilder , private bankservice:BankServiceService , private router:Router) { 
    this.bankservice.searchrequest(localStorage.getItem("edit")).subscribe({
      next:(data: any)=>{
       this.edit=data;}
      });
  }
  form:FormGroup
  ngOnInit(): void {
    console.log(localStorage.getItem("edit"))
    this.bankservice.searchrequest(localStorage.getItem("edit")).subscribe({
      next:(data: any)=>{
       this.edit=data;}
      });
  }

     editaccount(){
      console.log(this.edit);
      this.bankservice.editaccount(this.edit).subscribe({
       next:(_data: any)=>{this.disp_msg=" "+this.edit.name+" your account edited successfully";this.router.navigate(["/accountslist"])},
         error:(e: any)=>{console.log(e);this.disp_msg="Invalid Inputs";
         
      }
      })
   
    }
  }


