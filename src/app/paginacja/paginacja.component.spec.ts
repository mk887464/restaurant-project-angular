import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacjaComponent } from './paginacja.component';

describe('PaginacjaComponent', () => {
  let component: PaginacjaComponent;
  let fixture: ComponentFixture<PaginacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
