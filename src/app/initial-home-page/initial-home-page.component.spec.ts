import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialHomePageComponent } from './initial-home-page.component';

describe('InitialHomePageComponent', () => {
  let component: InitialHomePageComponent;
  let fixture: ComponentFixture<InitialHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
