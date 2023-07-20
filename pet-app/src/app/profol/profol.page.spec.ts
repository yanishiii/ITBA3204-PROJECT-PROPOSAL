import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfolPage } from './profol.page';

describe('ProfolPage', () => {
  let component: ProfolPage;
  let fixture: ComponentFixture<ProfolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
