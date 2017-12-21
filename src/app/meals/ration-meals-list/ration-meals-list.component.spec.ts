import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RationMealsListComponent } from './ration-meals-list.component';

describe('RationMealsListComponent', () => {
  let component: RationMealsListComponent;
  let fixture: ComponentFixture<RationMealsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RationMealsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RationMealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
