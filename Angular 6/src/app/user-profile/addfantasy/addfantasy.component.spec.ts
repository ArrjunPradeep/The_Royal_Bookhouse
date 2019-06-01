import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfantasyComponent } from './addfantasy.component';

describe('AddfantasyComponent', () => {
  let component: AddfantasyComponent;
  let fixture: ComponentFixture<AddfantasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfantasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
