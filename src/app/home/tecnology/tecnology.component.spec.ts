import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyComponent } from './tecnology.component';

describe('tecnologyComponent', () => {
  let component: TecnologyComponent;
  let fixture: ComponentFixture<TecnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
