import { InMemoryDbService } from 'angular-in-memory-web-api';
import { flights } from './flights-data';
import { users } from './users-data';
import { airports } from './airports-data';


export class FlightDatabase implements InMemoryDbService {
    createDb() {
        return { flights, users, airports };
    }

}