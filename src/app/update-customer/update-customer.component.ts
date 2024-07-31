import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomerForm! : FormGroup;

  id:number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute : ActivatedRoute,
    private service:CustomerService,
    private fb:FormBuilder,
    private router:Router){ }

  ngOnInit(){
    this.updateCustomerForm = this.fb.group({
      name:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null,[Validators.required, Validators.email]]

    })

    this.getCustomerById();
  }  
  
  getCustomerById(){
    this.service.getCustomerById(this.id).subscribe((res) => {
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  updateCustomer(){
    this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((res) => {
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/get-all-customers");

      }

    })
  }

}
