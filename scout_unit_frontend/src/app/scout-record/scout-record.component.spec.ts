import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutRecordComponent } from './scout-record.component';

describe('ScoutRecordComponent', () => {
  let component: ScoutRecordComponent;
  let fixture: ComponentFixture<ScoutRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
