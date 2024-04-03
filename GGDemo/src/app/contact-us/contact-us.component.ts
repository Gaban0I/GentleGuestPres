import { Component } from '@angular/core';
import { TitreBandeauComponent } from '../titre-bandeau/titre-bandeau.component';
import * as EmailJS from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [TitreBandeauComponent, FormsModule],
})
export class ContactUsComponent {
  constructor(private toastr: ToastrService) {}
  societe: string = '';
  nom: string = '';
  prenom: string = '';
  fonction: string = '';
  mail: string = '';
  telephone: string = '';
  adresse: string = '';
  selectedTypes: string[] = [];
  renseignement: string = '';
  updateSelectedTypes(type: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;

    if (isChecked) {
      if (!this.selectedTypes.includes(type)) {
        this.selectedTypes.push(type);
      }
    } else {
      const index = this.selectedTypes.indexOf(type);
      if (index !== -1) {
        this.selectedTypes.splice(index, 1);
      }
    }
  }

  sendEmail(): void {
    const templateParams = {
      société: this.societe,
      nom: this.nom,
      prénom: this.prenom,
      fonction: this.fonction,
      mail: this.mail,
      telephone: this.telephone,
      adresse: this.adresse,
      type: this.selectedTypes.join(', '),
      renseignement: this.renseignement,
    };

    EmailJS.send(
      'service_5rg7p0m',
      'template_5nzmsnc',
      templateParams,
      'eQ_zAn5G7usDvpiwr'
    ).then(
      (response) => {
        this.toastr.success('Email envoyé avec succès!');
        console.log('Email envoyé avec succès!', response);
      },
      (error) => {
        this.toastr.error("Erreur lors de l'envoi de l'email");
        console.error("Erreur lors de l'envoi de l'email:", error);
      }
    );
  }
}
