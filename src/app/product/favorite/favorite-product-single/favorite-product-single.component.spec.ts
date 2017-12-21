import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProductSingleComponent } from './favorite-product-single.component';

describe('FavoriteProductSingleComponent', () => {
  let component: FavoriteProductSingleComponent;
  let fixture: ComponentFixture<FavoriteProductSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteProductSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
