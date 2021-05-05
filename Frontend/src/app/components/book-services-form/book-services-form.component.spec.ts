import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookServicesFormComponent } from './book-services-form.component';

describe('BookServicesFormComponent', () => {
  let component: BookServicesFormComponent;
  let fixture: ComponentFixture<BookServicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookServicesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
