import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent} from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AccountComponent } from './components/account/account.component';
import { ManageServicesComponent } from './components/admin-dashboard-components/manage-services/manage-services.component';
import { ManageCustomersComponent } from './components/admin-dashboard-components/manage-customers/manage-customers.component';
import { ManageUsersComponent } from './components/admin-dashboard-components/manage-users/manage-users.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { CarwashComponent } from './components/services/carwash/carwash.component';


import { AuthGuard } from './auth/auth.guard';
import { TeamComponent } from './components/team/team.component';
import { GlassCoatingComponent } from './components/services/glass-coating/glass-coating.component';
import { PaintJobComponent } from './components/services/paint-job/paint-job.component';
import { TintServicesComponent } from './components/services/tint-services/tint-services.component';
import { ManageBookingsComponent } from './components/admin-dashboard-components/manage-bookings/manage-bookings.component';




const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'services', component: ServicesComponent},
{ path: 'account', component: AccountComponent},
{ path: 'manageServices', component: ManageServicesComponent, canActivate: [AuthGuard]},
{ path: 'manageCustomers', component: ManageCustomersComponent, canActivate: [AuthGuard]},
{ path: 'manageUsers', component: ManageUsersComponent, canActivate: [AuthGuard]},
{ path: 'manageBookings', component: ManageBookingsComponent, canActivate: [AuthGuard]},
{ path: 'sign-up', component: SignUpComponent},
{ path: 'login', component: LoginComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'team', component: TeamComponent},
{ path: 'carwash', component: CarwashComponent},
{ path: 'glasscoat', component: GlassCoatingComponent},
{ path: 'paintjob', component:PaintJobComponent},
{ path: 'tint', component: TintServicesComponent}

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
  AccountComponent,
  ManageServicesComponent,
  ManageCustomersComponent,
  ManageUsersComponent,
  ManageBookingsComponent,
  SignUpComponent,
  LoginComponent
]
