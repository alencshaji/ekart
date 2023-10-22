import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsermngComponent } from './admin-usermng.component';

describe('AdminUsermngComponent', () => {
  let component: AdminUsermngComponent;
  let fixture: ComponentFixture<AdminUsermngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsermngComponent]
    });
    fixture = TestBed.createComponent(AdminUsermngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
