import { Component } from '@angular/core';
import { CondidatService } from '../../services/condidat.service';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrl: './condidat.component.css'
})
export class CondidatComponent {
  email:string = '';
  nom:string = '';
  prenom:string = '';
  nomJeuneFille:string = '';
  sexe:string = '';
  dateNaissance:string = '';
  Nationalite:string = '';
  taille:string = '';
  telephone:string = '';
  cin:string = '';
  situationPro:string = ''
  constructor(private condidatService: CondidatService) {}
  onSubmit() {
    
      const condidatData = {
        email: this.email,
        prenom: this.prenom,
        nom: this.nom,
        nomJeuneFille: this.nomJeuneFille,
        sexe:this.sexe,
        dateNaissance:this.dateNaissance,
        Nationalite:this.Nationalite,
        taille:this.taille,
        telephone:this.telephone,
        cin:this.cin,
        situationPro:this.situationPro

      };
      console.log(condidatData);
      
      this.condidatService.createCandidate(condidatData).subscribe(
        (response) => {
          console.log(response);
          
          console.log('Response from server:', response);
          alert('Candidate added with success!')
        },
        (error) => {
          console.error('Error:', error);
        }
      );
   
  }

}