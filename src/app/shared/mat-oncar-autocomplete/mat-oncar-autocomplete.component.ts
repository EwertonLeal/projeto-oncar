import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'mat-oncar-autocomplete',
  templateUrl: './mat-oncar-autocomplete.component.html',
  styleUrls: ['./mat-oncar-autocomplete.component.scss']
})
export class MatOncarAutocompleteComponent implements OnInit {
  public control = new FormControl('');
  public filteredItens!: Observable<string[]>;
  public items!: string[];
  public inputValue!: string;
  public params = new HttpParams();
  public filtros: any = {};

  @Input() inputLabel!: string;
  @Input() inputIcon!: string;
  @Input() autoCompleteList!: string[];
  @Output() filtrosSelecionados = new EventEmitter<any>();

  ngOnInit() {
    setTimeout(() => {
      this.items = this.autoCompleteList;
      this.filteredItens = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    }, 500);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.items.filter(item => this._normalizeValue(item).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  carFilter(filter: any) {
    switch (this.inputLabel) {
      case "Marca":
        this.filtros.brand = filter.option.value;
        this.emitirFiltros();
        break;
      case "Modelo":
        this.filtros.model = filter.option.value;
        this.emitirFiltros();
        break;
      case "Ano":
        this.filtros.year = filter.option.value;
        this.emitirFiltros();
        break;
      case "Cor":
        this.filtros.color = filter.option.value;
        this.emitirFiltros();
        break;
    }
  }

  emitirFiltros() {
    this.filtrosSelecionados.emit(this.filtros);
  }

  onInputChange(event: any) {
    setTimeout(() => {
      if(event.target.value == "") {
        switch (this.inputLabel) {
          case "Marca":
            delete this.filtros.brand;
            this.emitirFiltros();
            break;
          case "Modelo":
            delete this.filtros.model;
            this.emitirFiltros();
            break;
          case "Ano":
            delete this.filtros.year;
            this.emitirFiltros();
            break;
          case "Cor":
            delete this.filtros.color;
            this.emitirFiltros();
            break;
        }
      }
    }, 200);
  }

}
