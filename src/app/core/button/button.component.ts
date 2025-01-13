import { Component, Input, input} from '@angular/core';

@Component({
  selector: 'button[app-button]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() label: string = ''

}
