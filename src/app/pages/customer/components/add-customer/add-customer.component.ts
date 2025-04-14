import {Component, importProvidersFrom} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CustomerFormComponent} from '../../forms/customer-form/customer-form.component';
import {Customer} from '../../customer.model';
import {CustomerService} from '../../customer.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [
    RouterLink,
    CustomerFormComponent,
    HttpClientModule
  ],
  providers: [CustomerService],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
  }
  onFormSubmit(customerData: Customer): void {
    this.customerService.createCustomer(customerData).subscribe(
      {
        next: () => {
          this.router.navigate(['/app/customers/list']);
        },
        error: err => {
          console.log('Error creating customer:', err);
        }
      }
    );
  }

  onCancel() {
    this.router.navigate(['/app/customers/list']);
  }
}
