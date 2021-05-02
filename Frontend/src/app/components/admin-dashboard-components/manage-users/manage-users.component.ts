import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model'
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [UserService]
})

export class ManageUsersComponent implements OnInit {
  showHideUsersForm = false;
  user;
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
    .subscribe((data: any) => this.user = data
    );
    console.log(this.user);
  }

  //edit or update customer info
  onEditUser(service : User) {
    this.usersService.selectedUser = service;
    this.showHideUsersForm = false;
  }

  //refresh Customers list
  refreshUsersList() {
    this.usersService.getUsers().subscribe((res) => {
      this.usersService.usersList = res as User[];
    });

  }

  //reset edit service form (this is the method for the cancel button on the form)
  resetUsersForm(form ?: NgForm) {
    if (form)
      form.reset();
    this.userService.selectedUser ={
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

  onSubmitUser(form : NgForm) {
    //add new user
    if(form.value._id == "") {
      this.usersService.postUser(form.value).subscribe((res) => {
        this.resetUsersForm(form);
        this.refreshUsersList();
        alert('New User added Successfully!');
      });

    //update existing user
    } else {
      this.usersService.editUser(form.value).subscribe((res) => {
        this.resetUsersForm(form);
        this.refreshUsersList();
        alert('User Information Updated Successfully');
      });
    }
    }

  onDeleteUser(_id: string){
    if(this.userDetails('Are you sure you want to delete this User?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.refreshUsersList();
        alert('User eleted Successfully')
      });
    }

  }

  //user logout
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }

}
