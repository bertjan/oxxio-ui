import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDemoComponent } from './line-chart-demo.component';
import { AppModule } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LineChartDemoComponent', () => {
  let component: LineChartDemoComponent;
  let fixture: ComponentFixture<LineChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
