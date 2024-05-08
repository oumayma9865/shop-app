import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsDetailPage } from './items-detail.page';

describe('ItemsDetailPage', () => {
  let component: ItemsDetailPage;
  let fixture: ComponentFixture<ItemsDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
