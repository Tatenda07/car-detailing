import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customers } from 'src/app/shared/customers.model';
import { CustomersService } from 'src/app/shared/customers.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css'],
  providers: [CustomersService]
})
export class ManageCustomersComponent implements OnInit {
  showHideCustomersForm = false;
  customer;
  userDetails;

  constructor(
    private userService: UserService,
    private router: Router,
    public customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.showHideCustomersForm = true
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      }
    );

    this.resetCustomersForm();
    this.refreshCustomersList();

  }

  toggleDisplayDivIf() {
    this.showHideCustomersForm = !this.showHideCustomersForm;
  }

  showCustomers() {
    this.customersService.getCustomer()
    .subscribe((data: any) => this.customer = data
    );
    console.log(this.customer);
  }

    //reset edit service form (this is the method for the cancel button on the form)
    resetCustomersForm(form ?: NgForm) {
      if (form)
        form.reset();
      this.customersService.selectedCustomer = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
      }
      this.showHideCustomersForm = true;
      this.refreshCustomersList();

    }

  //edit or update customer info
  onEditCustomer(customer : Customers) {
    this.customersService.selectedCustomer = customer;
    this.showHideCustomersForm = false;
  }

  //refresh Customers list
  refreshCustomersList() {
    this.customersService.getCustomer().subscribe((res) => {
      this.customersService.customersList = res as Customers[];
    });
  }

  //delete Customer
  onDeleteCustomer(_id: string){
    if(confirm('Are you sure you want to delete this customer?') == true) {
      this.customersService.deleteCustomer(_id).subscribe((res) => {
        this.refreshCustomersList();
        alert('Customer Deleted Successfully');
      });
    }
  }

  onSubmitCustomer(form : NgForm){
    //add new customer
    if(form.value._id == "") {
      this.customersService.postCustomer(form.value).subscribe((res) => {
        this.resetCustomersForm(form);
        this.refreshCustomersList();
        alert('New Customer added Successfully!');
      });

    //update existing customer
    } else {
      this.customersService.editCustomer(form.value).subscribe((res) => {
        this.resetCustomersForm(form);
        this.refreshCustomersList();
        alert('Customer Information Updated Successfully');
      });
    }
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }


}
