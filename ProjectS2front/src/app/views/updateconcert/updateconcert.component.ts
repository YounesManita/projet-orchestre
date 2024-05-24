import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../../services/concert.service';


@Component({
  selector: 'app-updateconcert',
  templateUrl: './updateconcert.component.html',
  styleUrls: ['./updateconcert.component.css']
})
export class UpdateconcertComponent implements OnInit {
  Date: string = '';
  lieu: string = '';
  concertId: string | null = null;

  constructor(
    private concertService: ConcertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.concertId = params.get('id');
      console.log(this.concertId);
      
      if (this.concertId) {
        this.loadConcertDetails(this.concertId);
      }
    });
  }

  loadConcertDetails(id: string): void {
    this.concertService.getConcertById(id).subscribe(
      (concert) => {
        this.Date = concert.Date;
        this.lieu = concert.lieu;
      },
      (error) => {
        console.error('Error fetching concert details: ', error);
      }
    );
  }

  updateConcert(): void {
    if (this.concertId) {
      const data = {
        Date: this.Date,
        lieu: this.lieu
      };
      this.concertService.updateConcert(this.concertId, data).subscribe(
        () => {
          console.log('Concert updated successfully');
          this.router.navigate(['dashboard-admin/concert-list']);
        },
        (error) => {
          console.error('Error updating concert:', error);
        }
      );
    }
  }
}
