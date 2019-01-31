import { CustomerEditModel } from './CustomerEdit.model';
import { Customer } from './../shared/Customer';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/customer/customer.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  customer: Customer;
  nameCtrl: FormControl;
  addressCtrl: FormControl;
  cityCtrl: FormControl;
  formBuilder: FormBuilder = new FormBuilder();
  customerGroup: FormGroup;

  constructor(
    private customerService: CustomerService,
    private router: ActivatedRoute
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
    this.customerService.getById(id).subscribe(customer => {
      console.log(customer);
      this.customer = customer.body;
    });
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

  onModify() {
    this.customerService.put(this.customer.id, this.customer).subscribe(customer => {
      const response = customer.body;
      console.log('Modified', response);
    });
  }

}
