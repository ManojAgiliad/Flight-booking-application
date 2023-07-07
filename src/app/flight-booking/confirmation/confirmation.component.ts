import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight, PassengerDetails, SearchFlight } from '../flight-details';
import { State, getCurrentFlight, getPassengerDetails, getSearchFlight } from '../state';
import { Store } from '@ngrx/store';
import { CHARGES_EXTRA_LUGGAGE_PER_KG, CHARGES_GST_PERCENTAGE, CHARGES_SERVICE_PERCENTAGE} from 'src/app/common/constant/constant-data'
import { FlightPageActions } from '../state/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
	readonly CHARGES_SERVICE_PERCENTAGE = 5;
	readonly CHARGES_GST_PERCENTAGE = 18;
	readonly CHARGES_EXTRA_LUGGAGE_PER_KG = 100;

    flight$!: Observable<Flight | null | undefined>;
	searchFlight$!: Observable<SearchFlight | null>;
	passengersDetail$!: Observable<PassengerDetails[]>;
	errorMessage: any;
	searchData!: SearchFlight | null;
	paymentHandler: any = null;

	buttonColor = "black";
	buttonType = "buy";
	isCustomSize = false;
	buttonWidth = 240;
	buttonHeight = 40;
	isTop = window === window.top;
	
	constructor( private store: Store<State>,
				private router: Router ) {

	}

	ngOnInit(): void {
		this.flight$ = this.store.select(getCurrentFlight);
		this.searchFlight$ = this.store.select(getSearchFlight);
		this.passengersDetail$ = this.store.select(getPassengerDetails)

		this.store.select(getSearchFlight).subscribe(
			s => this.searchData = s
		);

		this.invokeStripe();
	}

	makePayment(total: any): void {
		this.store.dispatch(FlightPageActions.setTotalFare({totalFare: total}));

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

	paymentRequest = {
		apiVersion: 2,
		apiVersionMinor: 0,
		allowedPaymentMethods: [
		  {
			type: "CARD",
			parameters: {
			  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
			  allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
			},
			tokenizationSpecification: {
			  type: "PAYMENT_GATEWAY",
			  parameters: {
				gateway: "example",
				gatewayMerchantId: "exampleGatewayMerchantId"
			  }
			}
		  }
		],
		merchantInfo: {
		  merchantId: "12345678901234567890",
		  merchantName: "Demo Merchant"
		},
		transactionInfo: {
		  totalPriceStatus: "FINAL",
		  totalPriceLabel: "Total",
		  totalPrice: "100.00",
		  currencyCode: "USD",
		  countryCode: "US"
		}
	};
	
	onLoadPaymentData(event: any) {
		console.log("load payment data", event.detail);
	}
}
