import { Component } from '@angular/core';
import { ViewCustomerComponent } from "../view-customer/view-customer.component";
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../model/Customer';

@Component({
  selector: 'app-customer',
  imports: [ViewCustomerComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

public Coustomer:Customer=new Customer("","",);

  constructor(private http:HttpClient){

  }

  public addCustomer() {
    fetch("http://localhost:8080/customer/saveCustomer")
      .then(res => res.json())
      
  }

}
