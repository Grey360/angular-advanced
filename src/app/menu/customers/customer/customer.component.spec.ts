import { Address } from './../../../shared/Address';
import { Customer } from './../../../shared/Customer';
import { AppModule } from './../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TabDirective } from '../../../shared/directives/tab.directive';
import { TabComponent } from '../../../tab/tab.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  const address = new Address('Earthbound', 'Earth Suite', 'Motherland', '92100');
  const customerTest = new Customer(
    'Gailor',
    address,
    address.city,
    address.zipcode,
    true,
    25,
    new Date(),
    'Thanos',
    'thanos@marvel.co.uk',
    '000000000',
    'thanos.co.uk'
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    component.customer = customerTest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
