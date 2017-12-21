import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RationMealsItemComponent } from './ration-meals-item.component';

describe('RationMealsItemComponent', () => {
  let component: RationMealsItemComponent;
  let fixture: ComponentFixture<RationMealsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RationMealsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RationMealsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
