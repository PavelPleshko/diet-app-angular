import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVitaminsComponent } from './product-vitamins.component';

describe('ProductVitaminsComponent', () => {
  let component: ProductVitaminsComponent;
  let fixture: ComponentFixture<ProductVitaminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVitaminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVitaminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
