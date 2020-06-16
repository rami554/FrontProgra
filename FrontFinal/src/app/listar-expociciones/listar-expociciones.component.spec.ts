import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExpocicionesComponent } from './listar-expociciones.component';

describe('ListarExpocicionesComponent', () => {
  let component: ListarExpocicionesComponent;
  let fixture: ComponentFixture<ListarExpocicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarExpocicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExpocicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
