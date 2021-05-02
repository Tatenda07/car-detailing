import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintJobComponent } from './paint-job.component';

describe('PaintJobComponent', () => {
  let component: PaintJobComponent;
  let fixture: ComponentFixture<PaintJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
