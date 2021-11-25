import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenRegistroComponent } from './orden-registro.component';

describe('OrdenRegistroComponent', () => {
  let component: OrdenRegistroComponent;
  let fixture: ComponentFixture<OrdenRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
