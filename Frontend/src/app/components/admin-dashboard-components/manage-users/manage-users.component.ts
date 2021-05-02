import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [UserService]
})

export class ManageUsersComponent implements OnInit {
  showHideUsersForm = false;
  users;
  userDetails;

  constructor(
    private userService: UserService,
    private router: Router,
    public usersService: UserService
  ) { }

  ngOnInit(): void {
    this.showHideUsersForm = true
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      }
    );

    this.resetUsersForm();
    this.refreshUsersList();
  }

  toggleDisplayDivIf() {
    this.showHideUsersForm = !this.showHideUsersForm;
  }

  ShowUsers() {
    this.usersService.getUsers()
    .subscribe((data: any) => this.users = data
    );
    console.log(this.users);
  }

  //edit or update customer info
  onEditUser() {
    //edit customer code here

    this.showHideUsersForm = false;
  }

  refreshUsersList(){

  }

  //reset edit service form (this is the method for the cancel button on the form)
  resetUsersForm(form ?: NgForm) {
    if (form)
      form.reset();
    this.usersService.selectedUser ={
      _id: "",
      fname: "",
      lname: "",
      username: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      role: "",
    }


    this.showHideUsersForm = true;
  }

  onSubmitUser(){

  }

  onDeleteUser(_id: string){
    if(this.userDetails('Are you sure you want to delete this User?') == true) {
      this.usersService.deleteUser(_id).subscribe((res) => {
        this.refreshUsersList();
      })
    }

  }

  //user logout
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }

}
