import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-customer',
  imports: [NgFor],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit {
  ngOnInit(): void {
    this.showCustomer()
  }


  public customerList: any = []

  public showCustomer() {

    fetch("http://localhost:8080/customer/getCustomer")
      .then(res => res.json())
      .then(data => {
          this.customerList=data
      });
  }

}
