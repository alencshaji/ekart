import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductmngComponent } from './admin-productmng.component';

describe('AdminProductmngComponent', () => {
  let component: AdminProductmngComponent;
  let fixture: ComponentFixture<AdminProductmngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductmngComponent]
    });
    fixture = TestBed.createComponent(AdminProductmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
