import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  showHideUsersForm = false

  constructor() { }

  ngOnInit(): void {
    this.showHideUsersForm = true
  }

  toggleDisplayDivIf() {
    this.showHideUsersForm = !this.showHideUsersForm;
  }

  //edit or update customer info
  onEditUser() {
    //edit customer code here

    this.showHideUsersForm = false;
  }

  //reset edit service form (this is the method for the cancel button on the form)
  resetUsersForm() {
    //resetCustomersForm code here

    this.showHideUsersForm = true;
  }

}
