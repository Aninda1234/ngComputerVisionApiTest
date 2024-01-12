import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoRecognitionComponent } from './logo-recognition.component';

describe('LogoRecognitionComponent', () => {
  let component: LogoRecognitionComponent;
  let fixture: ComponentFixture<LogoRecognitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoRecognitionComponent]
    });
    fixture = TestBed.createComponent(LogoRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
