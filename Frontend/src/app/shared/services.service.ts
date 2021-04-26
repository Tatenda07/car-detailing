import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Services } from './services.model'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  readonly baseURL = 'http://localhost:3000/services';
  selectedService: Services = {
    _id: '',
    serviceName: '',
    serviceDescription: ''
  };

  servicesList: Services[];

  constructor(private https: HttpClient) { }

  //insert new service into the database
  postService(service: Services) {
    return this.https.post(this.baseURL, service);
  }

  //get all services
  getService() {
    return this.https.get(this.baseURL);
  }

  //delete service
  deleteService(_id: string) {
    return this.https.delete(this.baseURL + `/${_id}`);
  }

  //edit service in the database (patch method)
  editService(service : Services) {
    return this.https.patch(this.baseURL + `/${service._id}`, service);
  }
}
