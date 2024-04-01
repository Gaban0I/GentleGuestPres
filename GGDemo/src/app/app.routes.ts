import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

export const routes: Routes = [
  { path: 'accueil', component: HomeComponentComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  //   { path: 'Hôtel', component: SecondComponent },
];
