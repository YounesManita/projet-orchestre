import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { PrecondidatService } from '../../../services/precondidat.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  confirmationSuccess: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private precondidatService: PrecondidatService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => { 
      const idParams = params.get('token');
      if (idParams !== null) {
        this.precondidatService.validationemail(idParams).subscribe(
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
