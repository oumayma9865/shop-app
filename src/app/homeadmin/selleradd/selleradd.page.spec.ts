import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelleraddPage } from './selleradd.page';

describe('SelleraddPage', () => {
  let component: SelleraddPage;
  let fixture: ComponentFixture<SelleraddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelleraddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
