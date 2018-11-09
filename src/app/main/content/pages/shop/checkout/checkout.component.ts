import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  	selector: 'app-checkout',
  	templateUrl: './checkout.component.html',
  	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
	orderForm: FormGroup;
	orderFormErrors: any;

  	constructor(
  		private formBuilder: FormBuilder
	) {
  		this.orderFormErrors = {
            fullName: {},
            email   : {},
            phone   : {},
            address : {},
            city    : {},
            zipCode : {},
            country : {}
        };

        this.orderForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            email   : ['', Validators.required],
            phone   : ['', Validators.required],
            address : ['', Validators.required],
            city    : ['', Validators.required],
            zipCode : ['', Validators.required],
            country : ['', Validators.required],
            message : ['', '']
        });

        this.orderForm.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });
	}
	onFormValuesChanged() {
        for (const field in this.orderFormErrors) {
            if ( !this.orderFormErrors.hasOwnProperty(field)) {
                continue;
            }

            this.orderFormErrors[field] = {};

            const control = this.orderForm.get(field);

            if ( control && control.dirty && !control.valid ) {
                this.orderFormErrors[field] = control.errors;
            }
        }
	}

  	ngOnInit() {
	}

	sendMessage(form) {
		console.log(form);
	}

}
