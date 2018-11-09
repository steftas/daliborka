import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contactForm: FormGroup;
	contactFormErrors: any;

  	constructor(
  		private formBuilder: FormBuilder
	) {
  		this.contactFormErrors = {
            name: {},
            email: {},
            message: {}
        };

        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required]
        });

        this.contactForm.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });
	}
	onFormValuesChanged() {
        for (const field in this.contactFormErrors) {
            if ( !this.contactFormErrors.hasOwnProperty(field)) {
                continue;
            }

            this.contactFormErrors[field] = {};

            const control = this.contactForm.get(field);

            if ( control && control.dirty && !control.valid ) {
                this.contactFormErrors[field] = control.errors;
            }
        }
	}

  	ngOnInit() {
	}

	sendMessage(form) {
		console.log(form);
	}
}
