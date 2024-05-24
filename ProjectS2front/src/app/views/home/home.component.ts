import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrecondidatService } from '../../services/precondidat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private precondidatService: PrecondidatService) {}

  onSubmit() {
    console.log('Form submitted:', this.firstName, this.lastName, this.email);
    if (this.firstName && this.lastName && this.email) {
      const precondidatData = {
        firstName: this.firstName,
        lastName: this.lastName,
        Email: this.email,
      };
      console.log(precondidatData);
      
      this.precondidatService.addprecondidat(precondidatData).subscribe(
        (response) => {
          
          
          console.log(response);
          
          console.log('Response from server:', response);
          alert('Candidate added with success!')
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.log('Form submission failed. Please fill in all required fields.');
    }
  }
}
