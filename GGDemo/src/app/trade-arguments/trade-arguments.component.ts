import { Component,Input} from '@angular/core';
import { ArgumentComponent } from './argument/argument.component';

@Component({
  selector: 'app-trade-arguments',
  standalone: true,
  imports: [ArgumentComponent],
  templateUrl: './trade-arguments.component.html',
  styleUrl: './trade-arguments.component.css'
})


export class TradeArgumentsComponent {
@Input({required: true }) trade_id!: string;
@Input({required: true }) trade_name!: string;
@Input ({required: true }) trade_teasing!: string;
 arguments = 
 [
  {
  List_argument_id: 'a1',
  List_argument_tradeId: 't01',
  List_argument_title: 'Augmentation de la Visibilité et Accès au Marché :',
  List_argument_summary: 'Les artisans luttent pour se faire connaître au-delà de leur localité immédiate et atteindre un public plus large intéressé par des produits authentiques et faits à la main',
  List_argument_dueDate: '2025-12-31', 
 },
 {
     List_argument_id: 'a2',
     List_argument_tradeId: 't03',
     List_argument_title: 'Build first prototype',
     List_argument_summary: 'Build a first prototype of the online shop website',
     List_argument_dueDate: '2024-05-31',  
 },
 {
     List_argument_id: 'a3',
     List_argument_tradeId: 't03',
     List_argument_title: 'Prepare issue template',
     List_argument_summary:'Prepare and describe an issue template which will help with project management',
     List_argument_dueDate: '2024-06-15',   
 },
 {
  List_argument_id: 'a1_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Amélioration de l'Expérience Client",
  List_argument_summary:"Les hôtels cherchent constamment à enrichir l'expérience de leurs clients pour augmenter" + 
                        " la satisfaction et encourager les retours",
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a2_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Augmentation de la Visibilité",
  List_argument_summary:"Dans un marché concurrentiel, les hôtels doivent se démarquer et attirer de nouveaux clients", 
                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a3_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Optimisation du Taux d'Occupation",
  List_argument_summary:"Maximiser le taux d'occupation est crucial pour la rentabilité.",

                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a4_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Fidélisation de la Clientèle",
  List_argument_summary:"Construire une base de clients fidèles dans un environnement compétitif.",

                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a5_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Gestion des Avis et Réputation en Ligne",
  List_argument_summary:"Les avis en ligne ont un impact significatif sur les décisions de réservation", 
                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a6_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Intégration des Technologies Numériques ",
  List_argument_summary:"Nécessité d'intégrer des solutions numériques hors de prix pour répondre aux attentes modernes des clients.",

                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a7_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Développement Durable et Responsabilité Sociale",
  List_argument_summary:"Les consommateurs sont de plus en plus soucieux de l'environnement et du développement durable", 
                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a8_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Analyse des Données et Insights",
  List_argument_summary:"Comprendre les préférences et le comportement des clients pour mieux servir leurs besoins", 
                        
  List_argument_dueDate: '2024-06-15',   
},
{
  List_argument_id: 'a9_t04',
  List_argument_tradeId: 't04',
  List_argument_title: "Harmonisation et transmission de l'Information au Client",
  List_argument_summary:"Harmoniser et formaliser le niveau d’information touristique délivré par le desk de réception auprès des clients.",
  List_argument_dueDate: '2024-06-15',   
},
];
get selectedTradeArguments() {
  return this.arguments.filter((argument) => argument.List_argument_tradeId === this.trade_id);
}

/*Le but est de supprimer un record de arguments de trade-arguments.c.ts  */   
onCompleteArgument(List_argument_id: string) {
  this.arguments = this.arguments.filter((argument) => argument.List_argument_id !== List_argument_id);

}
}
