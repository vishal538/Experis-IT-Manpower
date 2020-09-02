import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaboyaTestComponent } from './daboya-test.component';

describe('DaboyaTestComponent', () => {
  let component: DaboyaTestComponent;
  let fixture: ComponentFixture<DaboyaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaboyaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaboyaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
