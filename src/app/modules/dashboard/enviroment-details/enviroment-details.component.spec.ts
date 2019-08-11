import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentDetailsComponent } from './enviroment-details.component';

describe('EnviromentDetailsComponent', () => {
  let component: EnviromentDetailsComponent;
  let fixture: ComponentFixture<EnviromentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviromentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
