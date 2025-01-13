import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../core/button/button.component";

@Component({
  selector: 'app-past',
  imports: [ButtonComponent],
  templateUrl: './past.component.html',
  styleUrl: './past.component.css'
})
export class PastComponent {

  @Input() name: string = "HackHive";
  @Input() description: string = "";
  

}
