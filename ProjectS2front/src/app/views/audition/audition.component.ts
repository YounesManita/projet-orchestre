import { Component } from '@angular/core';
import { AuditionService } from '../../services/audition.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-audition',
  
  templateUrl: './audition.component.html',
  styleUrl: './audition.component.css'
})
export class AuditionComponent {
  date_premierjouraudition:Date = new Date();
  heuredebut_audition: Date = new Date();
  heureFin_audition: Date = new Date();
  heuredejeuner: Date = new Date();
  durerdejeuner: Date  = new Date();

  constructor(private auditionservice: AuditionService) {}

  onSubmit() {
    const condidatData = {
      date_premierjouraudition: this.date_premierjouraudition,
      heuredebut_audition: this.heuredebut_audition,
      heureFin_audition: this.heureFin_audition,
      heuredejeuner: this.heuredejeuner,
      durerdejeuner: this.durerdejeuner
    };
  
    // console.log(condidatData);

    this.auditionservice.createAuditionGlobal(condidatData).subscribe(
      (response) => {
        console.log('Response from server:', response);
        alert('Audition added with success!');
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
