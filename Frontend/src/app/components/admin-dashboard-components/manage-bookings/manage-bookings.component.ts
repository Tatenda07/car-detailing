import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesBooking } from 'src/app/shared/services-booking.model';
import { ServicesBookingService } from 'src/app/shared/services-booking.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css'],
  providers: [ServicesBookingService]
})
export class ManageBookingsComponent implements OnInit {
  showHideCustomersForm = false;
  booking;
  userDetails;

  constructor(
    private userService: UserService,
    private router: Router,
    public bookingService: ServicesBookingService
  ) { }

  ngOnInit(): void {
    this.showHideCustomersForm = true
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      }
    );

    this.resetBookingForm();
    this.refreshBookingLog();
  }

  toggleDisplayDivIf() {
    this.showHideCustomersForm = !this.showHideCustomersForm;
  }

  showBookings() {
    this.bookingService.getServiceBooking()
    .subscribe((data: any) => this.booking = data
    );
    console.log(this.booking);
  }

    //reset edit service booking form
    resetBookingForm(form ?: NgForm) {
      if (form)
        form.reset();
      this.bookingService.selectedBooking = {
        _id: "",
        customerFullname: "",
        email: "",
        phoneNumber: "",
        bookedService: "",
        carModel: "",
        date: "",
        message: ""
      }
      this.showHideCustomersForm = true;
      this.refreshBookingLog();

    }

  //edit or update booking details
  onEditBooking(booking : ServicesBooking) {
    this.bookingService.selectedBooking = booking;
    this.showHideCustomersForm = false;
  }

  //refresh booking log
  refreshBookingLog() {
    this.bookingService.getServiceBooking().subscribe((res) => {
      this.bookingService.bookingLog = res as ServicesBooking[];
    });
  }

  //delete booking
  onDeleteBooking(_id: string){
    if(confirm('Are you sure you want to delete this customer?') == true) {
      this.bookingService.deleteServiceBooking(_id).subscribe((res) => {
        this.refreshBookingLog();
        alert('Booking Deleted Successfully');
      });
    }
  }

  onSubmitBooking(form : NgForm){
    //add new booking
    if(form.value._id == "") {
      this.bookingService.postServiceBooking(form.value).subscribe((res) => {
        this.resetBookingForm(form);
        this.refreshBookingLog();
        alert('New Service Booking added Successfully!');
      });

    //update existing booking
    } else {
      this.bookingService.editServiceBooking(form.value).subscribe((res) => {
        this.resetBookingForm(form);
        this.refreshBookingLog();
        alert('Service Booking details Updated Successfully');
      });
    }
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }

}
