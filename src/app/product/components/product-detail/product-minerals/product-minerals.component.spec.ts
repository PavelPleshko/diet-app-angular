import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMineralsComponent } from './product-minerals.component';

describe('ProductMineralsComponent', () => {
  let component: ProductMineralsComponent;
  let fixture: ComponentFixture<ProductMineralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMineralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMineralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
