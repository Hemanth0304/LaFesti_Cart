import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PayservService } from '../payserv.service';


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {
 

  constructor(public fb: FormBuilder, public lr: PayservService,
    public router:Router ){ }

  pay: any;
  submitted = false;
  
    ngOnInit(): void {


      this.pay = this.fb.group({
        cardname: ['',Validators.required],
        cardnumber: ['',[Validators.required, Validators.pattern('[0-9]{16}')],],
        expmonth:['',[Validators.required ,Validators.pattern('[0-9]{2}')]],
        expyear: ['',[Validators.required ,Validators.pattern('[0-9]{4}')]],
        cvv: ['',[Validators.required ,Validators.pattern('[0-9]{3}')]],
        acceptTerms: [false, Validators.requiredTrue]
      })
     }

 
     
     get cardname() {
      return this.pay.controls['cardname'];
    }
    get cardnumber() {
      return this.pay.controls['cardnumber'];
    }
    get expmonth() {
      return this.pay.controls['expmonth'];
    }
    get expyear() {
      return this.pay.controls['expyear'];
    }
    get cvv() {
      return this.pay.controls['cvv'];
    }
    
 






    onSubmit() 
    {
      this.submitted = true;

      // stop here if form is invalid


      if (this.pay.valid) 
      {

        this.lr.addpay(this.pay.value).subscribe((data) => { });
        alert("Successful")
        this.router.navigate(["/"])
        
          return;
      }

      else{

        
      alert(' not SUCCESS!! :-')
      }

  }
    
    adddet() {
      
        this.lr.addpay(this.pay.value).subscribe((data) => { });
        alert("Successful")
        this.router.navigate(["/"])
  
     }
    }
     
  
  

