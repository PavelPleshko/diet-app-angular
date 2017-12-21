import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNutrientsComponent } from './product-nutrients.component';

describe('ProductNutrientsComponent', () => {
  let component: ProductNutrientsComponent;
  let fixture: ComponentFixture<ProductNutrientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNutrientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
