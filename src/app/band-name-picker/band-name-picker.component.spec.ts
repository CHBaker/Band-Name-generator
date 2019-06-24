import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandNamePickerComponent } from './band-name-picker.component';

describe('BandNamePickerComponent', () => {
  let component: BandNamePickerComponent;
  let fixture: ComponentFixture<BandNamePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandNamePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandNamePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
