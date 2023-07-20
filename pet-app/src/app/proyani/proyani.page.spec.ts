import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyaniPage } from './proyani.page';

describe('ProyaniPage', () => {
  let component: ProyaniPage;
  let fixture: ComponentFixture<ProyaniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProyaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
