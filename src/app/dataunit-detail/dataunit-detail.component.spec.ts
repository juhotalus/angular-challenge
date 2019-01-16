import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataunitDetailComponent } from './dataunit-detail.component';

describe('DataunitDetailComponent', () => {
  let component: DataunitDetailComponent;
  let fixture: ComponentFixture<DataunitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataunitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataunitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
