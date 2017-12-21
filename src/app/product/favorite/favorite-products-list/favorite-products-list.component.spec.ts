import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProductsListComponent } from './favorite-products-list.component';

describe('FavoriteProductsListComponent', () => {
  let component: FavoriteProductsListComponent;
  let fixture: ComponentFixture<FavoriteProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
