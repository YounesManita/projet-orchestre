import { Component, OnInit } from '@angular/core';

import { PrecondidatService } from '../../../../services/precondidat.service';

@Component({
  selector: 'app-precondidat-list',
  templateUrl: './precondidat-list.component.html',
  styleUrls: ['./precondidat-list.component.css']
})
export class PrecondidatListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private precondidatService: PrecondidatService) {}

  ngOnInit() {
    this.precondidatService.getAllCandidates().subscribe(
      (data) => {
        this.candidates = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching candidates: ', error);
      }
    );
  }

  
  submit() {
    console.log("hello from html ");
    
    this.precondidatService.lancerSaisonAndSendEmails().subscribe(
      () => {
        console.log('Season launched successfully and emails sent.');
        alert("Season launched successfully and emails sent.");
      },
      (error) => {
        console.error('Error launching season and sending emails: ', error);
        alert("Error launching season and sending emails: " + error.message);
      }
    );
  }
}
