import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicionAdicionarComponent } from './exposicion-adicionar.component';

describe('ExposicionAdicionarComponent', () => {
  let component: ExposicionAdicionarComponent;
  let fixture: ComponentFixture<ExposicionAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposicionAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposicionAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
