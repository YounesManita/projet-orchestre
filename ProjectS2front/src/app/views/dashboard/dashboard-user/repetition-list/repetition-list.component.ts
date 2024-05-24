import { Component } from '@angular/core';

@Component({
  selector: 'app-repetition-list',
  templateUrl: './repetition-list.component.html',
  styleUrl: './repetition-list.component.css'
})
export class RepetitionListComponent {

  repetitions: any[] = [
    {
      place: "Concert Hall",
      date: "2024-05-15",
      starthour: "19:00",
      endhour: "22:00"
    },
  ]; // Assuming you have an array of repetitions

  markPresent(repetition: any) {
    // Logic to mark the repetition as present
    console.log(`Marking repetition at ${repetition.place} on ${repetition.date} from ${repetition.starthour} to ${repetition.endhour} as present.`);
  }

  markAbsent(repetition: any) {
    // Logic to mark the repetition as absent
    console.log(`Marking repetition at ${repetition.place} on ${repetition.date} from ${repetition.starthour} to ${repetition.endhour} as absent.`);
  }

}
