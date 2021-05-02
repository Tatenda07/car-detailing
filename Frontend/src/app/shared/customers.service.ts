import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Customers } from './customers.model'

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  readonly baseURL = 'http://localhost:3000/servies';
  selectedService: Customers ={
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
  };

  customersList: Customers[];
  
  constructor(private https: HttpClient) { }

  //insert new customer into the database
  postCustomer(service: Customers) {
    return this.https.post(this.baseURL, service);
  }

  //get all customers
  getCustomer() {
    return this.https.get(this.baseURL);
  }

  //delete customer
  deleteCustomer(_id: string) {
    return this.https.delete(this.baseURL + `/${_id}`);
  }

  //edit customer in the database
  editCustomer(service : Customers) {
    return this.https.patch(this.baseURL + `/${service._id}`, service);
  }
}
