import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientemascotaComponent } from './expedientemascota.component';

describe('ExpedientemascotaComponent', () => {
  let component: ExpedientemascotaComponent;
  let fixture: ComponentFixture<ExpedientemascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientemascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientemascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
