import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRequestDetailsComponent } from './account-request-details/account-request-details.component';
import { HomeComponent } from './home/home.component';
import { EditAccountDetailsComponent } from './edit-account-details/edit-account-details.component';
import { ListAccountRequestsComponent } from './list-account-requests/list-account-requests.component';
import { SearchAccountComponent } from './search-account/search-account.component';
import { ViewAccountDetailsComponent } from './view-account-details/view-account-details.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
  
  },
  {
    path:"accountrequest",
    component:AccountRequestDetailsComponent,
  },
  {
  path:"editaccount",
  component:EditAccountDetailsComponent,
  },
  {
    path:"accountslist",
    component:ListAccountRequestsComponent,
  },
  {
    path:"search",
    component:SearchAccountComponent,
  },
  {
    path:"viewaccountdetails",
    component:ViewAccountDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
