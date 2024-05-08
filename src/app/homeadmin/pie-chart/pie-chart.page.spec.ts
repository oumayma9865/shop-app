import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartPage } from './pie-chart.page';

describe('PieChartPage', () => {
  let component: PieChartPage;
  let fixture: ComponentFixture<PieChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
