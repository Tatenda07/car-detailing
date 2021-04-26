import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  showHideUsersForm = false;
  userDetails;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showHideUsersForm = true
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      }
    );
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

  //user logout
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }

}
