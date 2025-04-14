import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer.model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'customer-form',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {
    @Input() customer: Customer | null = null;
    @Output() formSubmit: any = new EventEmitter<Customer>();
    @Output() formCancel: any = new EventEmitter<void>();

    customerForm!: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
      this.initForm();

      if(this.customer) {
        // renseigne automatiquement le formulaire avec les données du client
        this.customerForm.patchValue(this.customer);
      }
    }

    initForm(): void {
      this.customerForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required,  Validators.email]]
      })
    }

    onSubmit(): void {
      if(this.customerForm.valid) {
        const formData: any = this.customerForm.value;

        if(this.customer && this.customer.id) {
          formData.id = this.customer.id;
        }
        this.formSubmit.emit(formData);
      }
    }

    onCancel(): void {
      this.formCancel.emit();
    }
}
