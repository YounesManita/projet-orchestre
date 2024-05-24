import { Component } from '@angular/core';
import { CongeService } from '../../../../services/conge.service';

@Component({
  selector: 'app-leave-absence-confirm-list',
  templateUrl: './leave-absence-confirm-list.component.html',
  styleUrl: './leave-absence-confirm-list.component.css'
})
export class LeaveAbsenceConfirmListComponent {
  leaves: any[] = [];
  constructor(private congeService: CongeService) {}
  ngOnInit() {
    this.congeService.getAllConge().subscribe(
      (data) => {
        this.leaves = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching leaves: ', error);
      }
    );
  }
}
