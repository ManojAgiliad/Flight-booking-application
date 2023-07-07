import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchFlight } from 'src/app/flight-booking/flight-details';
import { State, getSearchFlight } from 'src/app/flight-booking/state';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchFlight$!: Observable<SearchFlight | null>;

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService,
              private store: Store<State> ) { }

  ngOnInit(): void {
    console.log("Hello")
    this.searchFlight$ = this.store.select(getSearchFlight);
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
