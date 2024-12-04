import { Component } from '@angular/core';
import { ViewCustomerComponent } from "../view-customer/view-customer.component";

@Component({
  selector: 'app-customer',
  imports: [ViewCustomerComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
