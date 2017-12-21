import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishMakerRootComponent } from './dish-maker-root.component';

describe('DishMakerRootComponent', () => {
  let component: DishMakerRootComponent;
  let fixture: ComponentFixture<DishMakerRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishMakerRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishMakerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
