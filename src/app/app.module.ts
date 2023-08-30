import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http' 

import { AccountRequestDetailsComponent } from './account-request-details/account-request-details.component';
import { ListAccountRequestsComponent } from './list-account-requests/list-account-requests.component';
import { ViewAccountDetailsComponent } from './view-account-details/view-account-details.component';
import { EditAccountDetailsComponent } from './edit-account-details/edit-account-details.component';
import { SearchAccountComponent } from './search-account/search-account.component';
import { HomeComponent } from './home/home.component';
import { AccountslistComponent } from './accountslist/accountslist.component';

@NgModule({
  declarations: [
    AppComponent,
   
    AccountRequestDetailsComponent,
    ListAccountRequestsComponent,
    ViewAccountDetailsComponent,
    EditAccountDetailsComponent,
    SearchAccountComponent,
    HomeComponent,
    AccountslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
