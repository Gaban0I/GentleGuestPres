import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeBarComponent } from './cafe-bar.component';

describe('CafeBarComponent', () => {
  let component: CafeBarComponent;
  let fixture: ComponentFixture<CafeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
