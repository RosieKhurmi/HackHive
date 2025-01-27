import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expandable',
  imports: [
    CommonModule
  ],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.css'
})
export class ExpandableComponent {

  @Input() title: string = ''; 
  @Input() description: string = ''; 
  @Input() points: { title: string; details: string }[] = [];
  @Input() expandableTitle: string = ''; 
  @Input() expandableContent: { title: string; details: string[] }[] = [];

  isExpanded: boolean = false;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

}
