import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassCoatingComponent } from './glass-coating.component';

describe('GlassCoatingComponent', () => {
  let component: GlassCoatingComponent;
  let fixture: ComponentFixture<GlassCoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassCoatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
