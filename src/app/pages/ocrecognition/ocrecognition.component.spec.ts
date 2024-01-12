import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCRecognitionComponent } from './ocrecognition.component';

describe('OCRecognitionComponent', () => {
  let component: OCRecognitionComponent;
  let fixture: ComponentFixture<OCRecognitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OCRecognitionComponent]
    });
    fixture = TestBed.createComponent(OCRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
