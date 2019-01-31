import { CustomerEditModel } from './CustomerEdit.model';
import { Customer } from './../shared/Customer';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer/customer.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  customerModel: Customer;
  customer: Observable<Customer>;
  nameCtrl: FormControl;
  addressCtrl: FormControl;
  cityCtrl: FormControl;
  formBuilder: FormBuilder = new FormBuilder();
  customerGroup: FormGroup;

  constructor(
    private customerService: CustomerService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.handleIncomingRequest();
  }

  handleIncomingRequest() {
    this.router.params.subscribe(params => {
      this.loadCustomer(+params.id);
    });
  }

  loadCustomer(id: number) {
    this.customer = this.customerService.getById(id);
  }

  private initForm() {
    this.nameCtrl = this.formBuilder.control('', {
      validators: [Validators.required]
    });

    this.addressCtrl = this.formBuilder.control('', Validators.required);

    this.cityCtrl = this.formBuilder.control('', Validators.required);

    this.customerGroup = this.formBuilder.group({
      name: this.nameCtrl,
      address: this.addressCtrl,
      city: this.cityCtrl
    });
  }

  onModify(customer_id: number, customer_mod: Customer) {
    this.customerService.put(customer_id, customer_mod).subscribe(customer => {
      const response = customer.body;
    });
  }

  navigate(uri: string) {
    this.route.navigate([uri], { relativeTo: this.router });
  }

}
