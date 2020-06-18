import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicionListarComponent } from './exposicion-listar.component';

describe('ExposicionListarComponent', () => {
  let component: ExposicionListarComponent;
  let fixture: ComponentFixture<ExposicionListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposicionListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposicionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
