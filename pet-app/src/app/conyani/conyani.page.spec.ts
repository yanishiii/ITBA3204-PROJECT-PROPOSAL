import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConyaniPage } from './conyani.page';

describe('ConyaniPage', () => {
  let component: ConyaniPage;
  let fixture: ComponentFixture<ConyaniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConyaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
