import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataobatComponent } from './dataobat/dataobat.component';
import { DetailobatComponent } from './detailobat/detailobat.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

// import { OtherComponent } from './other/other.component';
import { AuthGuard } from './auth.services';
import { EmailComponent } from './email/email.component';
import { WishlistComponent } from './wishlist/wishlist.component';


export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'dataobat', component: DataobatComponent},
  { path: 'detailobat', component: DetailobatComponent},
  { path: 'wishlist', component: WishlistComponent },
  { path: 'about', component: AboutComponent},
];
// export const router: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'signup', component: SignupComponent },
//     { path: 'login-email', component: EmailComponent },
//     { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
//
// ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
