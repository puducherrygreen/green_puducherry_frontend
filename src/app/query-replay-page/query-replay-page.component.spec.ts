import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryReplayPageComponent } from './query-replay-page.component';

describe('QueryReplayPageComponent', () => {
  let component: QueryReplayPageComponent;
  let fixture: ComponentFixture<QueryReplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryReplayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryReplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
