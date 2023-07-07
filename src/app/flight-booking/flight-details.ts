export interface Flight {
    id: number,
    flight_date: string,
    flight_status: string,
    stop: number,
    price: {
        first_class: number,    // first class
        business_class: number, // business class
        economy_class: number   //economy class
    },
    departure: {
        airport: string,
        timezone: string,
        terminal: number,
        gate: number,
        scheduled: string,
        estimated: string
    },
    arrival: {
        airport: string,
        timezone: string,
        terminal: number,
        gate: number,
        scheduled: string,
        estimated: string
    },
    airline: {
        name: string
    },
    flight: {
        number: number
        codeshared?: object
    }
}

export interface SearchFlight {
    flightType: string,
    flyingFrom: string,
    flyingTo: string,
    departureDate: string,
    returnDate: string,
    adultPassenger: number,
    childPassenger: number,
    travelClass: string
}

export interface PassengerDetails {
    fullName: string,
    type: string,
    gender: string
}

export interface Airports {
    id: number,
    name: string
}