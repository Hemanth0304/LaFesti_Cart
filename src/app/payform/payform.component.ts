import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { C2Service } from '../c2.service';

import { PayservService } from '../payserv.service';

@Component({
  selector: 'app-payform',
  templateUrl: './payform.component.html',
  styleUrls: ['./payform.component.css']
})
export class PayformComponent implements OnInit {

  pay :any ;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public lr: PayservService, public c2: C2Service,  public router:Router) { }

  ngOnInit() {
      this.pay = this.formBuilder.group({
        Name: ['', Validators.required],
        card: ['', [Validators.required, Validators.minLength(16),Validators.pattern('[0-9]{16}')]],
          exp: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]{4}')],],
          expm: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[0-9]{2}')],],
          password: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[0-9]{3}')],]
          
      });
  }

  // convenience getter for easy access to form fields


  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.pay.invalid) {
          return;
      }
      

      this.lr.addpay(this.pay.value).subscribe((data) => { });
      alert(" Payment Successful")
      this.router.navigate(["/"])


    
  }

  get f() { return this.pay.controls; }

  get lastName() {
    return this.pay.controls['lastName'];
  }
  get Name() {
    return this.pay.controls['Name'];
  }
}