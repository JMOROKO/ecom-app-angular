import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CustomerFormComponent} from '../../forms/customer-form/customer-form.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from '../../customer.service';
import {Customer} from '../../customer.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [
    RouterLink,
    CustomerFormComponent,
    HttpClientModule,
    NgIf
  ],
  providers: [CustomerService],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit {
  customer!: Customer;
  customerId!: number;
  loading = true;
  error = false;
  constructor(
      private customerService: CustomerService,
      private router: Router,
      private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
      this.customerId = this.route.snapshot.params['id'];
      this.loadCustomer();
  }

  loadCustomer() {
    this.customerService.getCustomer(this.customerId).subscribe({
      next: (data: any) => {
        this.customer = data;
        this.loading = false;
        this.error = false;
      },
      error: (error) => {
        console.error('Error loading customer', error);
        this.loading = true;
        this.error = true;
      }
    })
  }

  onFormSubmit(customerData: Customer): void {
    alert("OK")
    const updatedCustomer = {
      ...customerData,
      id: customerData.id
    }
    console.log(updatedCustomer);
    this.customerService.updateCustomer(updatedCustomer).subscribe(
      {
        next: () => {
          this.router.navigate(['/app/customers/list']);
        },
        error: err => {
          console.log('Error updating customer:', err);
        }
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/app/customers/list']);
  }
}
