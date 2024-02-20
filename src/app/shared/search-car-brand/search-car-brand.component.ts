import {Component, Input} from '@angular/core';




@Component({
  selector: 'oncar-input-select',
  templateUrl: './search-car-brand.component.html',
  styleUrls: ['./search-car-brand.component.scss']
})
export class OncarInputSelect {
  @Input() inputLabel!: string;
  @Input() autoCompleteList!: Array<any>;

  public inputValue!: string;
}
