import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealBuilderComponent } from './meal-builder.component';

describe('MealBuilderComponent', () => {
  let component: MealBuilderComponent;
  let fixture: ComponentFixture<MealBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
