import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {

    @Input() label: string = '';
    @Input() btnClass: string = 'btn-primary';
    @Output() onClick = new EventEmitter<string>();
    constructor() {
      
    }

    ngOnInit(): void {
      
    }

    emitEvent() {
      this.onClick.emit();
    }

}

