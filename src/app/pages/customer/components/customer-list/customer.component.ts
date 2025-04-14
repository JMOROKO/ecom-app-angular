import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from '../../customer.service';
import {Customer} from '../../customer.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    RouterLink,
    HttpClientModule,
    NgIf,
    NgForOf
  ],
  providers: [CustomerService],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  loading = true;
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading customers', error);
        this.loading = false;
      }
    })
  }
}
