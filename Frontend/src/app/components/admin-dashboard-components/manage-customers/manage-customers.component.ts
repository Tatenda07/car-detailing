import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  showHideCustomersForm = false;

  constructor() { }

  ngOnInit(): void {
    this.showHideCustomersForm = true;
  }

  toggleDisplayDivIf() {
    this.showHideCustomersForm = !this.showHideCustomersForm;
  }

  //edit or update customer info
  onEditCustomer() {
    //edit customer code here

    this.showHideCustomersForm = false;
  }

  //reset edit service form (this is the method for the cancel button on the form)
  resetCustomersForm() {
    //resetCustomersForm code here

    this.showHideCustomersForm = true;
  }



}
