import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageInstagramComponent } from './home-page-instagram.component';

describe('HomePageInstagramComponent', () => {
  let component: HomePageInstagramComponent;
  let fixture: ComponentFixture<HomePageInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageInstagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
