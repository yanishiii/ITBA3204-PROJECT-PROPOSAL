import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitterPage } from './sitter.page';

describe('SitterPage', () => {
  let component: SitterPage;
  let fixture: ComponentFixture<SitterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
