import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable',
  imports: [],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.css'
})
export class ExpandableComponent {

  @Input() title: string = ''; 
  @Input() description: string = ''; 
  @Input() points: { title: string; details: string }[] = [];
  @Input() expandableTitle: string = ''; 
  @Input() expandableContent: { title: string; details: string[] }[] = [];

}
