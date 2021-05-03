import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Customers } from './customers.model'

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  readonly baseURL = 'http://localhost:3000/customers';
  selectedCustomer: Customers ={
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
  postCustomer(customer: Customers) {
    return this.https.post(this.baseURL, customer);
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
  editCustomer(customer : Customers) {
    return this.https.patch(this.baseURL + `/${customer._id}`, customer);
  }
}
