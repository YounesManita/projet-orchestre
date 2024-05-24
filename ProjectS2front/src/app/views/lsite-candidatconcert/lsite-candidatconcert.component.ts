import { Component } from '@angular/core';
import { ConcertService } from '../../services/concert.service';

@Component({
  selector: 'app-lsite-candidatconcert',
  templateUrl: './lsite-candidatconcert.component.html',
  styleUrl: './lsite-candidatconcert.component.css'

})
export class LsiteCandidatconcertComponent {
  concertcandidat: any[] = [];
  constructor(private concertService: ConcertService) {}
  ngOnInit() {
    this.concertService.getcandidatstatus().subscribe(
      (elem)=>{
        this.concertcandidat=elem
      }
     )
  }
}

