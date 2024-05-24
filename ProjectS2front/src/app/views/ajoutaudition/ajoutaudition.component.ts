import { Component, OnInit } from '@angular/core';
import { AuditionService } from '../../services/audition.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajoutaudition',
  templateUrl: './ajoutaudition.component.html',
  styleUrl: './ajoutaudition.component.css'
})
export class AjoutauditionComponent implements OnInit{
  extrait: string = '';
  tessiture: string = '';
  evaluation: string = '';
  decision: string = '';
  remarque: string = '';
  audition: string | null = null;
  private readonly USER_ID_KEY = 'idaudition';
  constructor(private auditionservice:AuditionService ,   private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.audition = params.get('id');
      console.log(this.audition);
      
     
    });
  }
  onSubmit() {
    const condidatData = {
      extrait: this.extrait,
      tessiture: this.tessiture,
      evaluation: this.evaluation,
      decision: this.decision,
      remarque:this.remarque,
      audition:this.audition
    };
    console.log(condidatData);
    
    this.auditionservice.createAudition(condidatData).subscribe(
      (response) => {
        
        
        console.log(response);
        
        console.log('Response from server:', response);
        this.router.navigate(['/dashboard-admin/audition-list']);
        
      },
      (error) => {
        console.error('Error:', error);
      }
    );
 
}
}
