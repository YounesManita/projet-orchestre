import { Component } from '@angular/core';
import { AuditionService } from '../../../../services/audition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audition-list',
  templateUrl: './audition-list.component.html',
  styleUrl: './audition-list.component.css'
})
export class AuditionListComponent {
  auditions: any[] = [
  ];
  constructor( private auditionservice:AuditionService , private router: Router) { }
  ngOnInit(): void {  
    this.auditionservice.getAllAudition().subscribe(
      (data) => {
        this.auditions = data.model;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching candidates: ', error);
      }
    );
  }
 

  AddAudition(id: any) {
    if (id) {
      console.log(id);
      
      this.router.navigate(['/ajoutaudition', id]);
    } else {
      console.error('Invalid concert data.');
    }
   
  }

  deleteAudition(audition: any) {
    // Implement delete logic here
    console.log('Deleting audition:', audition);
  }

}
