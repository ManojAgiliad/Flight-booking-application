import { Component } from '@angular/core';
import { State, getTotalFare } from '../state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
	paymentHandler: any = null;
	amount: number | null = 0;

	constructor( private store: Store<State>,
		private router: Router ) {
	}
	
	ngOnInit(): void {
		this.store.select(getTotalFare).subscribe(
			value => this.amount = value
		);

		this.invokeStripe();
	}

	ngAfterViewInit(): void {
		console.log("this.amount : ", this.amount)
		this.makePayment(200);
	}
	
	makePayment(total: any): void {
		const paymentHandler = (<any>window).StripeCheckout.configure({
			key: 'pk_test_51NJGq3SAt59PQJacML9jk8XeieDvFEICJUDHPo7y63s63VpQkYE39WwF1VvixQC3V96VGxrjIgx07m5niY94W0Pm00JChPrbwz',
			locale: 'auto',
			token: function (stripeToken: any) {
			  console.log(stripeToken);
			},
		});
		paymentHandler.open({
			name: 'Flight Booking',
			description: 'Fly The Friendly Skies',
			amount: total * 100,
		});
	}

	invokeStripe() {
		if (!window.document.getElementById('stripe-script')) {
			const script = window.document.createElement('script');
			script.id = 'stripe-script';
			script.type = 'text/javascript';
			script.src = 'https://checkout.stripe.com/checkout.js';
			script.onload = () => {
				this.paymentHandler = (<any>window).StripeCheckout.configure({
				key: 'pk_test_51NJGq3SAt59PQJacML9jk8XeieDvFEICJUDHPo7y63s63VpQkYE39WwF1VvixQC3V96VGxrjIgx07m5niY94W0Pm00JChPrbwz',
				locale: 'auto',
				token: function (stripeToken: any) {
					console.log(stripeToken);
					alert('Payment has been successfull!');
				},
				});
			};
		  	window.document.body.appendChild(script);
		}
	}
}
