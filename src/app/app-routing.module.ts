import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './user/auth-guard.service';

import { SearchFlightsComponent } from './flight-booking/search-flights/search-flights.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './user/login.component';

const appRoutes: Routes = [
    { path: 'home', component: SearchFlightsComponent },
    {
      path: 'flights',
      // canActivate: [AuthGuard],
      loadChildren: () =>
        import('./flight-booking/flight.module').then(m => m.FlightModule)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
