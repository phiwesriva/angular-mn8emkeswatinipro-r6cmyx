import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
checkoutForm;

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
       nameandsurname: ['',Validators.required],
      Cname: '',
      Tnumber: '',
      Cnumber: ['',Validators.required],
      Eaddress: '',
      Info: '',

 

    });}

  ngOnInit() {
  }

onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Information submitted', customerData);
  }
  

}
