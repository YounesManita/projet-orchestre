import { Component } from '@angular/core';
import { ConcertService } from '../../../../services/concert.service';

@Component({
  selector: 'app-concert-list-user',
  templateUrl: './concert-list-user.component.html',
  styleUrl: './concert-list-user.component.css'
})
export class ConcertListUserComponent {
  private readonly USER_ID_KEY = 'iduser';
  concerts :any[] = [
    
  ];
  constructor( private concertservice:ConcertService) { }
  ngOnInit(): void {  
    this.concertservice.getAllConcert().subscribe(
      (data) => {
        this.concerts = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching candidates: ', error);
      }
    );
  }
 markPresent(id: any): void {
  const candidat = localStorage.getItem(this.USER_ID_KEY);
  
    this.concertservice.marquerpresence(id, candidat).subscribe(
      (response) => {
        console.log(response);
        alert("Bravo! Vous avez bien enregistré à ce concert.");
      },
      (error) => {
        console.error('Error marking presence:', error);
        alert("Erreur lors de l'enregistrement à ce concert.");
      }
    );
  
  }
  

  markAbsent(id: any) {
    const  candidat="66428d0bf03b8d5cacf912b9"
     
    this.concertservice.marquerabssance(id,candidat).subscribe(
     (elem)=>{
       console.log(elem);
       alert("vous avez marquer votre abssance a ce concert ")
       
     }
    ) }
}
