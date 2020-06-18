import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicionEditComponent } from './exposicion-edit.component';

describe('ExposicionEditComponent', () => {
  let component: ExposicionEditComponent;
  let fixture: ComponentFixture<ExposicionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposicionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposicionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
