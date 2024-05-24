import { Component } from '@angular/core';
import { OeuvreService } from '../../../../services/oeuvre.service';

@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrl: './oeuvre.component.css'
})
export class OeuvreComponent {
  titre: string = '';
  compositeur: string = '';
  arrangeur: string = '';
  anneeComposition: number =0;
  genre: string = '';

  constructor(private oeuvreservice:OeuvreService) {}

  onSubmit() {
    const formData = {
      titre: this.titre,
      compositeur: this.compositeur,
      arrangeur: this.arrangeur,
      anneeComposition: this.anneeComposition,
      genre: this.genre
    };
    console.log('Form Data:', formData);
    this.oeuvreservice.createRepetition(formData).subscribe(
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
