import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private formbuilder:FormBuilder , private bankservice:BankServiceService , private router:Router) { 
  
  }

}
