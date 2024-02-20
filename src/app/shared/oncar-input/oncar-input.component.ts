import { Component, Input } from '@angular/core';

@Component({
  selector: 'oncar-input',
  templateUrl: './oncar-input.component.html',
  styleUrls: ['./oncar-input.component.scss']
})
export class OncarInputComponent {
  @Input() inputLabel!: string;
  @Input() inputIcon!: string;
  @Input() autoCompleteList!: Array<any>;

  public inputValue!: string;
}
