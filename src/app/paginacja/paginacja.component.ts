import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacja',
  templateUrl: './paginacja.component.html',
  styleUrls: ['./paginacja.component.css']
})
export class PaginacjaComponent implements OnInit {

  _elementAmount: number = 1;
  _iloscNaStronie: number = 1;

  get elementAmount(): number{
    return this._elementAmount;
  }

  @Input()
  set elementAmount(ilosc: number){
    this._elementAmount = ilosc;
    this.setPagesAmount(this._elementAmount, this._iloscNaStronie);
  }

  get iloscNaStronie(): number{
    return this._iloscNaStronie;
  }

  @Input()
  set iloscNaStronie(ilosc: number){
    this._iloscNaStronie = ilosc;
    this.setPagesAmount(this._elementAmount, this._iloscNaStronie);
  }

  @Output('startElement') startElement: EventEmitter<number> = new EventEmitter<number>();
  @Output('endElement') endElement: EventEmitter<number> = new EventEmitter<number>();
  @Output('currentPage') currentPage: EventEmitter<number> = new EventEmitter<number>();

  iloscDoWyswietlenia: number = 2;
  page: number = 0;
  iloscStron: number = 1;

  constructor() { }

  ngOnInit() {
  }

  setPagesAmount(elementaAmount: number, iloscNaStronie: number){
    this.iloscDoWyswietlenia = 2 * iloscNaStronie;
    this.iloscStron = Math.ceil(elementaAmount/iloscNaStronie);
  }

 changePage(page: number){
    this.page = 0;
    this.page = page;
    this.startElement.emit(page*this.iloscNaStronie);
    this.endElement.emit((page+1)*this.iloscNaStronie);
    this.currentPage.emit(page);
  }
}