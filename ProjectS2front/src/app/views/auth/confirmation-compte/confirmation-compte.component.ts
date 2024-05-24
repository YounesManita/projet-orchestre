import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuditionService } from '../../../services/audition.service';

@Component({
  selector: 'app-confirmation-compte',
  templateUrl: './confirmation-compte.component.html',
  styleUrl: './confirmation-compte.component.css'
})
export class ConfirmationCompteComponent implements OnInit  {
  confirmationSuccess: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private auditionService:AuditionService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => { 
      const idParams = params.get('token');
      if (idParams !== null) {
        this.auditionService.acceptationCompte(idParams).subscribe(
          (response) => {
            console.log(response);
           
            this.confirmationSuccess = true;
          },
          (error) => {
            console.error(error);
           
          }
        );
      }
    });
  }
}
