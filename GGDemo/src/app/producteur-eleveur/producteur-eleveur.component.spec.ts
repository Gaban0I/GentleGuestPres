import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteurEleveurComponent } from './producteur-eleveur.component';

describe('ProducteurEleveurComponent', () => {
  let component: ProducteurEleveurComponent;
  let fixture: ComponentFixture<ProducteurEleveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducteurEleveurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducteurEleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
