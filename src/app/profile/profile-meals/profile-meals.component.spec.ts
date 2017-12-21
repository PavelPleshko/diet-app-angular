import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMealsComponent } from './profile-meals.component';

describe('ProfileMealsComponent', () => {
  let component: ProfileMealsComponent;
  let fixture: ComponentFixture<ProfileMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
