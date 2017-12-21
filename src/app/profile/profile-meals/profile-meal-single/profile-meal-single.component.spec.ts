import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMealSingleComponent } from './profile-meal-single.component';

describe('ProfileMealSingleComponent', () => {
  let component: ProfileMealSingleComponent;
  let fixture: ComponentFixture<ProfileMealSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMealSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMealSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
