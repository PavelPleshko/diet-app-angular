import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealMenuViewComponent } from './meal-menu-view.component';

describe('MealMenuViewComponent', () => {
  let component: MealMenuViewComponent;
  let fixture: ComponentFixture<MealMenuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealMenuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
