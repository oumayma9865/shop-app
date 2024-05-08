import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListsellerPage } from './listseller.page';

describe('ListsellerPage', () => {
  let component: ListsellerPage;
  let fixture: ComponentFixture<ListsellerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
