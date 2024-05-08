import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerDetailsModalPage } from './seller-details.modal.page';

describe('SellerDetailsModalPage', () => {
  let component: SellerDetailsModalPage;
  let fixture: ComponentFixture<SellerDetailsModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDetailsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
