export const flights = [
	{
		"id": 1,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 2,
		"price": {
			"first_class": 15845,
			"business_class": 98542,
			"economy_class": 1523
		},
		"departure": {
			"airport": "Chhatrapati Shivaji International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"scheduled": "2023-05-24T04:05:00+00:00",
			"estimated": "2023-05-24T04:05:00+00:00",
		},
		"arrival": {
			"airport": "Kempegowda International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T05:35:00+00:00",
			"estimated": "2023-05-24T05:35:00+00:00",
		},
		"airline": {
			"name": "Central Airlines",
		},
		"flight": {
			"number": "9872",
			"codeshared": null
		}
	},
	{
		"id": 2,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 1,
		"price": {
			"first_class": 12000,
			"business_class": 15000,
			"economy_class": 8000
		},
		"departure": {
			"airport": "Kempegowda International",
			"timezone": "Asia/Kolkata",
			"terminal": "3",
			"gate": null,
			"scheduled": "2023-05-24T01:35:00+00:00",
			"estimated": "2023-05-24T01:35:00+00:00",
		},
		"arrival": {
			"airport": "Chhatrapati Shivaji International",
			"timezone": "Asia/Kolkata",
			"terminal": "1",
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T07:10:00+00:00",
			"estimated": "2023-05-24T07:10:00+00:00",
		},
		"airline": {
			"name": "Indigo Airlines",
		},
		"flight": {
			"number": "8375",
			"codeshared": {
				"airline_name": "scoot",
				"airline_iata": "tr",
				"airline_icao": "tgw",
				"flight_number": "135",
				"flight_iata": "tr135",
				"flight_icao": "tgw135"
			}
		}
	},
	{
		"id": 3,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 3,
		"price": {
			"first_class": 12000,
			"business_class": 2541,
			"economy_class": 25483
		},
		"departure": {
			"airport": "Chennai International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"scheduled": "2023-05-24T01:05:00+00:00",
			"estimated": "2023-05-24T01:05:00+00:00",
		},
		"arrival": {
			"airport": "Cincinnati/Northern Kentucky",
			"timezone": "America/New_York",
			"terminal": null,
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T07:10:00+00:00",
			"estimated": "2023-05-24T07:10:00+00:00",
		},
		"airline": {
			"name": "DHL Air",
		},
		"flight": {
			"number": "3",
			"codeshared": null
		}
	},
	{
		"id": 4,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 2,
		"price": {
			"first_class": 12000,
			"business_class": 15000,
			"economy_class": 8000
		},
		"departure": {
			"airport": "Netaji Subhas Chandra Bose International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"scheduled": "2023-05-24T04:30:00+00:00",
			"estimated": "2023-05-24T04:30:00+00:00",
		},
		"arrival": {
			"airport": "Chennai International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T06:30:00+00:00",
			"estimated": "2023-05-24T06:30:00+00:00",
		},
		"airline": {
			"name": "Air India",
		},
		"flight": {
			"number": "567",
			"codeshared": null
		}
	},
	{
		"id": 5,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 1,
		"price": {
			"first_class": 12000,
			"business_class": 15000,
			"economy_class": 8000
		},
		"departure": {
			"airport": "Brisbane International",
			"timezone": "Australia/Brisbane",
			"terminal": null,
			"gate": null,
			"scheduled": "2023-05-24T04:35:00+00:00",
			"estimated": "2023-05-24T04:35:00+00:00",
		},
		"arrival": {
			"airport": "Townsville International",
			"timezone": "Australia/Brisbane",
			"terminal": null,
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T06:40:00+00:00",
			"estimated": "2023-05-24T06:40:00+00:00",
		},
		"airline": {
			"name": "Qantas",
		},
		"flight": {
			"number": "7332",
			"codeshared": null
		}
	},
	{
		"id": 6,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 2,
		"price": {
			"first_class": 12000,
			"business_class": 15000,
			"economy_class": 8000
		},
		"departure": {
			"airport": "Chaudhary Charan Singh International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"scheduled": "2023-05-24T00:40:00+00:00",
			"estimated": "2023-05-24T00:40:00+00:00",
		},
		"arrival": {
			"airport": "Sri Guru Ram Dass Jee International",
			"timezone": "Asia/Kolkata",
			"terminal": "1",
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T03:00:00+00:00",
			"estimated": "2023-05-24T03:00:00+00:00",
		},
		"airline": {
			"name": "Akasa Air",
		},
		"flight": {
			"number": "5015",
			"codeshared": null
		}
	},
	{
		"id": 7,
		"flight_date": "2023-05-24",
		"flight_status": "scheduled",
		"stop": 2,
		"price": {
			"first_class": 12000,
			"business_class": 15000,
			"economy_class": 8000
		},
		"departure": {
			"airport": "Visakhapatnam International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"scheduled": "2023-05-24T02:10:00+00:00",
			"estimated": "2023-05-24T02:10:00+00:00",
		},
		"arrival": {
			"airport": "Chhatrapati Shivaji International",
			"timezone": "Asia/Kolkata",
			"terminal": null,
			"gate": null,
			"baggage": null,
			"scheduled": "2023-05-24T03:15:00+00:00",
			"estimated": "2023-05-24T03:15:00+00:00",
		},
		"airline": {
			"name": "YTO Cargo Airlines",
		},
		"flight": {
			"number": "9103",
			"codeshared": null
		}
	}
]