import { Component } from '@angular/core';
import { CongeService } from '../../../../services/conge.service';

@Component({
  selector: 'app-leave-absence-list',
  templateUrl: './leave-absence-list.component.html',
  styleUrl: './leave-absence-list.component.css'
})
export class LeaveAbsenceListComponent {
  leaves: any[] = [];
  constructor(private congeService: CongeService) {}
  ngOnInit() {
    this.congeService.getAllCongeRefused().subscribe(
      (data) => {
        this.leaves = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching leaves: ', error);
      }
    );
  }

  acceptLeave(id: string) {
    this.congeService.accepterconge(id).subscribe(
      element=>{
        console.log(element);
        alert("conge accepter avec success!!")
        this.congeService.getAllCongeRefused()
      }
    )
  }

  refuseLeave(id: String) {
    this.congeService.refuserconge(id).subscribe(
      element=>{
        console.log(element);
        alert("conge refuser avec success!!")
        this.congeService.getAllCongeRefused()
      }
    ) }

}
