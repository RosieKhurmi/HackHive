import { Component } from '@angular/core';
import { ExpandableComponent } from '../shared/expandable/expandable.component';

@Component({
  selector: 'app-itinerary',
  imports: [
    ExpandableComponent
  ],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css'
})
export class ItineraryComponent {

}
