import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcceptPage } from './accept.page';

describe('AcceptPage', () => {
  let component: AcceptPage;
  let fixture: ComponentFixture<AcceptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
