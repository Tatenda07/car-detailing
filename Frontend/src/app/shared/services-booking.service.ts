import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ServicesBooking } from './services-booking.model'

@Injectable({
  providedIn: 'root'
})
export class ServicesBookingService {
  readonly baseURL = 'http://localhost:3000/servicesBooking';
  selectedBooking: ServicesBooking = {
    _id: '',
    customerFullname: '',
    email: '',
    phoneNumber: '',
    bookedService: '',
    carModel: '',
    date: '',
    message: ''
  };

  bookingLog: ServicesBooking[];

  constructor(private https: HttpClient) { }

  //insert new service booking into the database
  postServiceBooking(booking: ServicesBooking) {
    return this.https.post(this.baseURL, booking);
  }

  //get all services booked
  getServiceBooking() {
    return this.https.get(this.baseURL);
  }

  //delete a booked service
  deleteServiceBooking(_id: string) {
    return this.https.delete(this.baseURL + `/${_id}`);
  }

  //edit a booked service in the database (patch method)
  editServiceBooking(booking : ServicesBooking) {
    return this.https.patch(this.baseURL + `/${booking._id}`, booking);
  }
}
