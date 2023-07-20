import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppsitPage } from './appsit.page';

describe('AppsitPage', () => {
  let component: AppsitPage;
  let fixture: ComponentFixture<AppsitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppsitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
