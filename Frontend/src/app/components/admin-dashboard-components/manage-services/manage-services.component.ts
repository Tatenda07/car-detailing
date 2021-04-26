import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from 'src/app/shared/services.model';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css'],
  providers: [ServicesService]
})
export class ManageServicesComponent implements OnInit {
  showHideServicesForm = false;
  services;
  constructor(
    public servicesService: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetServicesForm();
    this.refreshServicesList();
  }

  toggleDisplayDivIf() {
    this.showHideServicesForm = !this.showHideServicesForm;
  }

  //retrieve all services from the database
  showServices() {
    this.servicesService.getService()
      .subscribe((data: any) => this.services = data
      );
    console.log(this.services);
  }

    //reset edit service form
    resetServicesForm(form ?: NgForm) {
      if (form)
        form.reset();
      this.servicesService.selectedService = {
        _id: "",
        serviceName: "",
        serviceDescription: "",
      }
      this.showHideServicesForm = true;
      this.refreshServicesList();
    }

    onSubmitService(form : NgForm) {
      //add new service
      if (form.value._id == "") {
        this.servicesService.postService(form.value).subscribe((res) => {
          this.resetServicesForm(form);
          this.refreshServicesList();
          alert('New service added successfully!');
        });

      //update exixting service
      } else {
        this.servicesService.editService(form.value).subscribe((res) => {
          this.resetServicesForm(form);
          this.refreshServicesList();
          alert('Service information updated successfully');
        });
      }
    }

    //edit or update service
    onEditService(service : Services) {
      this.servicesService.selectedService = service;
      this.showHideServicesForm = false;
    }

    //refresh services list
    refreshServicesList() {
    this.servicesService.getService().subscribe((res) => {
      this.servicesService.servicesList = res as Services[];
    });
  }

  //delete service
  onDeleteSrvice(_id : string) {
    if(confirm('Are you sure you want to delete this service?') == true) {
      this.servicesService.deleteService(_id).subscribe((res) => {
        this.refreshServicesList();
        alert('Service Deleted successfully');
      });
    }
  }

}
