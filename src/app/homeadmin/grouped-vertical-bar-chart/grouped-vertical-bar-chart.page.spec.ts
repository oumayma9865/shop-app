import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupedVerticalBarChartPage } from './grouped-vertical-bar-chart.page';

describe('GroupedVerticalBarChartPage', () => {
  let component: GroupedVerticalBarChartPage;
  let fixture: ComponentFixture<GroupedVerticalBarChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedVerticalBarChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
