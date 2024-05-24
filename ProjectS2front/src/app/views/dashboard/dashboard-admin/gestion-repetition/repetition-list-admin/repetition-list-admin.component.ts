import { Component } from '@angular/core';
import { RepititionService } from '../../../../../services/repitition.service';

@Component({
  selector: 'app-repetition-list-admin',
  templateUrl: './repetition-list-admin.component.html',
  styleUrl: './repetition-list-admin.component.css'
})
export class RepetitionListAdminComponent {
  repetitions: any[] = []; 

  constructor(private repetitionService: RepititionService) {}
  ngOnInit(): void {  
    this.repetitionService.getAllRepitition().subscribe(
      (data) => {
        this.repetitions = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching candidates: ', error);
      }
    );
  }

  editRepetition(repetition: any) {
 }

  deleteRepetition(repetition: any) {
  }
}
