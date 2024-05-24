import { Component } from '@angular/core';
import { ConcertService } from '../../../../../services/concert.service';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrl: './add-concert.component.css'
})
export class AddConcertComponent {
  Date: string = ""; 
  lieu: string = ""; 
constructor(private concertservice :ConcertService){}
  onSubmit() {
   const concertData={
    Date:this.Date,
    lieu:this.lieu
   }
   console.log(concertData);
      
      this.concertservice.createConcert(concertData).subscribe(
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
