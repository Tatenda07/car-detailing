import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintServicesComponent } from './tint-services.component';

describe('TintServicesComponent', () => {
  let component: TintServicesComponent;
  let fixture: ComponentFixture<TintServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TintServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TintServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
