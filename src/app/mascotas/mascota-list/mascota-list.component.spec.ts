import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaListComponent } from './mascota-list.component';

describe('MascotaListComponent', () => {
  let component: MascotaListComponent;
  let fixture: ComponentFixture<MascotaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
