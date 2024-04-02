import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HotelComponent } from './hotel/hotel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CafeBarComponent } from './cafe-bar/cafe-bar.component';
import { CampingComponent } from './camping/camping.component';
import { MagasinComponent } from './magasin/magasin.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ProducteurEleveurComponent } from './producteur-eleveur/producteur-eleveur.component';
import { OfficeDeTourismeComponent } from './office-de-tourisme/office-de-tourisme.component';
import { AgenceDeVoyagesComponent } from './agence-de-voyages/agence-de-voyages.component';
import { ReceptifComponent } from './receptif/receptif.component';
import { MairieComponent } from './mairie/mairie.component';
import { MediaPresseComponent } from './media-presse/media-presse.component';
import { ClubSportifComponent } from './club-sportif/club-sportif.component';
import { TransportDePersonnesComponent } from './transport-de-personnes/transport-de-personnes.component';

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
