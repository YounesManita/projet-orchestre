import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private readonly USER_KEY = 'token';
  private readonly USER_ID_KEY = 'iduser';
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService , private router:Router) { }

  onSubmit() {
    if (this.email && this.password) {
      this.loginService.login(this.email, this.password)
        .subscribe(
          (response) => {
            if(response.resultat.role=="admin"){
            console.log("Login successful", response);
            localStorage.setItem(this.USER_KEY, JSON.stringify(response.token));
            localStorage.setItem(this.USER_ID_KEY, response.resultat._id);
            console.log(response.resultat);
            this.router.navigate(['/dashboard-admin']);
          }
          else{
            console.log("Login successful", response);
            localStorage.setItem(this.USER_KEY, JSON.stringify(response.token));
            localStorage.setItem(this.USER_ID_KEY, response.resultat._id);
            console.log(response.resultat);
            this.router.navigate(['/dashboard-user']);
          }
          },
          (error) => {
            console.error("Login failed:", error);
          }
        );
    } else {
      console.log("Form submission failed. Please fill in all required fields.");
    }
  }
}
