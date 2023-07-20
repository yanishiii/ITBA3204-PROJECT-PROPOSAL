import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclinePage } from './decline.page';

describe('DeclinePage', () => {
  let component: DeclinePage;
  let fixture: ComponentFixture<DeclinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeclinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
