import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  showHideCustomersForm = false;
  userDetails;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      }
    );

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

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }


}
