import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'company', loadChildren: 'app/company/company.module#CompanyModule' },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(
  routes, { useHash: false });

