import { Component } from '@angular/core';
import { CondidatService } from '../../../../services/condidat.service';

@Component({
  selector: 'app-account-acceptation',
  templateUrl: './account-acceptation.component.html',
  styleUrl: './account-acceptation.component.css'
})
export class AccountAcceptationComponent {

  sop: number = 0;
  alt: number = 0;
  ten: number = 0;
  bas: number = 0;
  constructor(private condidatService: CondidatService) {}
  onSubmit() {
    const formData = {
      sop: this.sop,
      alt: this.alt,
      ten: this.ten,
      bas: this.bas
    };
    this.condidatService.acceptation(formData).subscribe(
      (response) => {
        console.log(response);
        
        console.log('Response from server:', response);
        alert('Candidate added with success!')
      },
      (error) => {
        console.error('Error:', error);
      }
    );
   
  }
}
