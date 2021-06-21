import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePoiComponent } from './capture-poi.component';

describe('CapturePoiComponent', () => {
  let component: CapturePoiComponent;
  let fixture: ComponentFixture<CapturePoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturePoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturePoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
