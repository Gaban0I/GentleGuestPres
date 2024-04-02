import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptifComponent } from './receptif.component';

describe('ReceptifComponent', () => {
  let component: ReceptifComponent;
  let fixture: ComponentFixture<ReceptifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
