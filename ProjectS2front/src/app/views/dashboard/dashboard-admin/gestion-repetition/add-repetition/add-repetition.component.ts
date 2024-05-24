import { Component } from '@angular/core';
import { RepititionService } from '../../../../../services/repitition.service';

@Component({
  selector: 'app-add-repetition',
  templateUrl: './add-repetition.component.html',
  styleUrl: './add-repetition.component.css'
})
export class AddRepetitionComponent {

  lieu: string = '';
  date: Date = new Date();
  heure_debut: string = '';
  heure_fin: string = '';
  constructor(private repetitionService: RepititionService) {}
  onSubmit() {
    const formData = {
      lieu: this.lieu,
      date: this.date,
      heure_debut: this.heure_debut,
      heure_fin: this.heure_fin
    };
    this.repetitionService.createRepetition(formData).subscribe(
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
