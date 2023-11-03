import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableNextPhotoComponent } from './enable-next-photo.component';

describe('EnableNextPhotoComponent', () => {
  let component: EnableNextPhotoComponent;
  let fixture: ComponentFixture<EnableNextPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableNextPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableNextPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
