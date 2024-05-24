import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements 
OnInit {
  password: string = '';
  private readonly USER_ID_KEY = 'iduser';
  constructor(private http: HttpClient ,private loginservice:LoginService) {}
  ngOnInit(): void {
    const userId = localStorage.getItem(this.USER_ID_KEY); 
    console.log(userId);
  }
  onSubmit() {
    const userId = localStorage.getItem(this.USER_ID_KEY); 
    console.log(userId);
    
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    this.loginservice.ChangePassword(userId,this.password).subscribe(
      (response) => {
        console.log('Password changed successfully:', response);
        
      },
      (error) => {
        console.error('Error changing password:', error);
        // Handle error, show an error message to the user, etc.
      }
    );
  }

 
}
