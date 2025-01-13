import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioLabelComponent } from './audio-label.component';

describe('AudioLabelComponent', () => {
  let component: AudioLabelComponent;
  let fixture: ComponentFixture<AudioLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
