import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesBookingService } from 'src/app/shared/services-booking.service';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-book-services-form',
  templateUrl: './book-services-form.component.html',
  styleUrls: ['./book-services-form.component.css']
})
export class BookServicesFormComponent implements OnInit {
  services;

  constructor(
    private router: Router,
    public bookingService: ServicesBookingService,
    public servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    this.resetBookingsForm();
  }

  //retrieve all services from the database
  showServices() {
    this.servicesService.getService()
      .subscribe((data: any) => this.services = data
      );
    console.log(this.services);
  }

  //reset service booking form
  resetBookingsForm(form ?: NgForm) {
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
  }

  onSubmitNewBooking(form : NgForm){
    //add new booking
      this.bookingService.postServiceBooking(form.value).subscribe((res) => {
        this.resetBookingsForm(form);
        alert('Your Service was successfully booked!');
      });
  }

}
