import { Component } from '@angular/core';
import { ConcertService } from '../../../../../services/concert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrl: './concert-list.component.css'
})
export class ConcertListComponent {
  concerts :any[] = [
    
  ];
  constructor( private concertservice:ConcertService , private router: Router) { }
  ngOnInit(): void {
    this.loadConcerts();
  }

  loadConcerts(): void {
    this.concertservice.getAllConcert().subscribe(
      (data) => {
        this.concerts = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching concerts: ', error);
      }
    );
  }

  editConcert(id: any): void {
    if (id) {
      console.log(id);
      
      this.router.navigate(['/updateconcert', id]);
    } else {
      console.error('Invalid concert data.');
    }
  }
 

  statuscandidat(){
    this.router.navigate(['/dashboard-admin/concert-list-candidat']);
  }
  deleteconcert(id: string): void {
    if (!id) {
      console.error('Invalid concert ID.');
      return;
    }
    if (confirm('Are you sure you want to delete this concert?')) {
      this.concertservice.deleteConcert(id).subscribe(
        () => {
          console.log('Concert deleted successfully');
          this.loadConcerts(); // Reload the concerts to refresh the list
        },
        (error) => {
          console.error('Error deleting concert:', error);
        }
      );
    }
  }
  addRepetition(id:any):void{
    if (id) {
      console.log(id);
      
      this.router.navigate(['/dashboard-admin/add-repetition', id]);
    } else {
      console.error('Invalid concert data.');
    }
  }
}
