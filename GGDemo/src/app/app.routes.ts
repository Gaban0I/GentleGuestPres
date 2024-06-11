import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CafeBarComponent } from './pages/cafe-bar/cafe-bar.component';
import { CampingComponent } from './pages/camping/camping.component';
import { MagasinComponent } from './pages/magasin/magasin.component';
import { ArtisanComponent } from './pages/artisan/artisan.component';
import { ProducteurEleveurComponent } from './pages/producteur-eleveur/producteur-eleveur.component';
import { OfficeDeTourismeComponent } from './pages/office-de-tourisme/office-de-tourisme.component';
import { AgenceDeVoyagesComponent } from './pages/agence-de-voyages/agence-de-voyages.component';
import { ReceptifComponent } from './receptif/receptif.component';
import { MairieComponent } from './pages/mairie/mairie.component';
import { MediaPresseComponent } from './pages/media-presse/media-presse.component';
import { ClubSportifComponent } from './pages/club-sportif/club-sportif.component';
import { TransportDePersonnesComponent } from './pages/transport-de-personnes/transport-de-personnes.component';

export const routes: Routes = [
  { path: 'accueil', component: HomeComponentComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'cafe-bar', component: CafeBarComponent },
  { path: 'camping', component: CampingComponent },
  { path: 'magasin', component: MagasinComponent },
  { path: 'artisan', component: ArtisanComponent },
  { path: 'producteur-eleveur', component: ProducteurEleveurComponent },
  { path: 'office-de-tourisme', component: OfficeDeTourismeComponent },
  { path: 'agence-de-voyages', component: AgenceDeVoyagesComponent },
  { path: 'receptif', component: ReceptifComponent },
  { path: 'mairie', component: MairieComponent },
  { path: 'media-presse', component: MediaPresseComponent },
  { path: 'club-sportif', component: ClubSportifComponent },
  { path: 'transport-de-personnes', component: TransportDePersonnesComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
