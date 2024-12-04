import { Routes } from '@angular/router';
import { ViewCustomerComponent } from './pages/view-customer/view-customer.component';
import { CustomerComponent } from './pages/customer/customer.component';

export const routes: Routes = [
    {
        path:"customer",
        component:CustomerComponent
    },
    
];
