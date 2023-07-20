import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinboxPage } from './clinbox.page';

describe('ClinboxPage', () => {
  let component: ClinboxPage;
  let fixture: ComponentFixture<ClinboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClinboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
