import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ExpandableComponent } from '../expandable/expandable.component';
import 'add-to-calendar-button';


@Component({
  selector: 'app-itinerary',
  imports: [
    ExpandableComponent
  ],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItineraryComponent {

}
