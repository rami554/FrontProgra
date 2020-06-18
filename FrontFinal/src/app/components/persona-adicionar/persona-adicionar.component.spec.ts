import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaAdicionarComponent } from './persona-adicionar.component';

describe('PersonaAdicionarComponent', () => {
  let component: PersonaAdicionarComponent;
  let fixture: ComponentFixture<PersonaAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
