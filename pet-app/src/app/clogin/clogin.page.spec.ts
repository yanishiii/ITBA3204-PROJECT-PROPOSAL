import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloginPage } from './clogin.page';

describe('CloginPage', () => {
  let component: CloginPage;
  let fixture: ComponentFixture<CloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
