import { Component, OnInit } from '@angular/core';

import { CondidatService } from '../../../../services/condidat.service';
@Component({
  selector: 'app-condidat-list',
  templateUrl: './condidat-list.component.html',
  styleUrl: './condidat-list.component.css'
})
export class CondidatListComponent implements OnInit  {
  candidates: any[] = [
    
    // More candidates can be added here
  ];

  constructor( private condidatservice:CondidatService) { }
  ngOnInit(): void {  
    this.condidatservice.getAllCandidates().subscribe(
      (data) => {
        this.candidates = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching candidates: ', error);
      }
    );
  }
  


  editCandidate(candidate: any) {
    // Implement edit logic here
    console.log('Editing candidate:', candidate);
  }

  deleteCandidate(candidate: any) {
    // Implement delete logic here
    console.log('Deleting candidate:', candidate);
  }
  submit() {
    console.log("hello from html ");}
}
