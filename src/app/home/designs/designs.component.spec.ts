import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsComponent } from './designs.component';

describe('DesignsComponent', () => {
  let component: DesignsComponent;
  let fixture: ComponentFixture<DesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
