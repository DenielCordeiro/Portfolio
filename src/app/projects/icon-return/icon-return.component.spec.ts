import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconReturnComponent } from './icon-return.component';

describe('IconReturnComponent', () => {
  let component: IconReturnComponent;
  let fixture: ComponentFixture<IconReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
