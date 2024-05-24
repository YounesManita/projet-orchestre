import { Component } from '@angular/core';
import { CongeService } from '../../../../services/conge.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent {

  Datedebut: string = '';
  DateFin: string = '';
  
  private readonly USER_ID_KEY = 'iduser';
  constructor(private congeservice: CongeService){}
  
  onSubmit() {
   const congeData={
    Datedebut: this.Datedebut,
    DateFin: this.DateFin,
    candidat:localStorage.getItem(this.USER_ID_KEY)
   }
   console.log(congeData);
      
      this.congeservice.createConge(congeData).subscribe(
        (response) => {
          console.log(response);
                
          console.log('Response from server:', response);
          alert('Conge added with success!')
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
