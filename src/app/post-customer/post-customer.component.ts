import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { subscribe } from 'node:diagnostics_channel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent implements OnInit {

  postCustomerForm!: FormGroup;

  constructor(private customerService:CustomerService,
    private fb:FormBuilder,
    private router: Router){}

  ngOnInit(){
    this.postCustomerForm = this.fb.group({
      name:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null,[Validators.required, Validators.email]]

    })

  }

    postCustomer(){
      if (this.postCustomerForm.invalid) {
        this.postCustomerForm.markAllAsTouched();
        return;
      }
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res) =>{
      console.log(res);
      this.router.navigateByUrl("/get-all-customers")
    });
  }

}
