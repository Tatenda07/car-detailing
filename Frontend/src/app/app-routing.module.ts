import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent} from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent} from './components/products/products.component';
import { AccountComponent } from './components/account/account.component';
import { ManageServicesComponent } from './components/admin-dashboard-components/manage-services/manage-services.component';
import { ManageCustomersComponent } from './components/admin-dashboard-components/manage-customers/manage-customers.component';
import { ManageUsersComponent } from './components/admin-dashboard-components/manage-users/manage-users.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';


import { AuthGuard } from './auth/auth.guard';
import { TeamComponent } from './components/team/team.component';




const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'services', component: ServicesComponent},
{ path: 'products', component: ProductsComponent},
{ path: 'account', component: AccountComponent},
{ path: 'manageServices', component: ManageServicesComponent, canActivate: [AuthGuard]},
{ path: 'manageCustomers', component: ManageCustomersComponent, canActivate: [AuthGuard]},
{ path: 'manageUsers', component: ManageUsersComponent, canActivate: [AuthGuard]},
{ path: 'sign-up', component: SignUpComponent},
{ path: 'login', component: LoginComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'team', component: TeamComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  ServicesComponent,
  ProductsComponent,
  AccountComponent,
  ManageServicesComponent,
  ManageCustomersComponent,
  ManageUsersComponent,
  SignUpComponent,
  LoginComponent
]
