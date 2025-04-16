import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
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
  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    this.customerService.getCustomers().subscribe({
      next: (data:any) => {
        this.customers = data._embedded.customers;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading customers', error);
        this.loading = false;
      }
    })
  }

  deleteCustomer(id: number | undefined) {
    if(confirm("Veuillez confirmer la suppression du client")) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          this.loadCustomer();
        },
        error: (error) => {
          console.error('Error deleting customer', error);
        }
      })
    }
  }

  editCustomer(id: number | undefined) {
    this.router.navigate(['/app/customers/edit', id]);
  }
}
