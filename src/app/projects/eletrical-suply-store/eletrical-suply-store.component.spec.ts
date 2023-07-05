import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletricalSuplyStoreComponent } from './eletrical-suply-store.component';

describe('EletricalSuplyStoreComponent', () => {
  let component: EletricalSuplyStoreComponent;
  let fixture: ComponentFixture<EletricalSuplyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletricalSuplyStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EletricalSuplyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
