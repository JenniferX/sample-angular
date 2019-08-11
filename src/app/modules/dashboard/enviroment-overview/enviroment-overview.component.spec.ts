import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentOverviewComponent } from './enviroment-overview.component';

describe('EnviromentOverviewComponent', () => {
  let component: EnviromentOverviewComponent;
  let fixture: ComponentFixture<EnviromentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviromentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
