import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigStarComponent } from './big-star.component';

describe('BigStarComponent', () => {
  let component: BigStarComponent;
  let fixture: ComponentFixture<BigStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
