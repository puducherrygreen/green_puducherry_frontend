import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPhotoUpdateDateComponent } from './next-photo-update-date.component';

describe('NextPhotoUpdateDateComponent', () => {
  let component: NextPhotoUpdateDateComponent;
  let fixture: ComponentFixture<NextPhotoUpdateDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPhotoUpdateDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPhotoUpdateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
