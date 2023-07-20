import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprofilePage } from './sprofile.page';

describe('SprofilePage', () => {
  let component: SprofilePage;
  let fixture: ComponentFixture<SprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
