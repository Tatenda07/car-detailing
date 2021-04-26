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




const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'services', component: ServicesComponent},
{ path: 'products', component: ProductsComponent},
{ path: 'account', component: AccountComponent},
{ path: 'manageServices', component: ManageServicesComponent},
{ path: 'manageCustomers', component: ManageCustomersComponent},
{ path: 'manageUsers', component: ManageUsersComponent},
{ path: 'sign-up', component: SignUpComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'}

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
  SignUpComponent
]
