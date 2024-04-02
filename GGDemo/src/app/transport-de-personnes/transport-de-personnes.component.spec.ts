import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportDePersonnesComponent } from './transport-de-personnes.component';

describe('TransportDePersonnesComponent', () => {
  let component: TransportDePersonnesComponent;
  let fixture: ComponentFixture<TransportDePersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportDePersonnesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportDePersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
