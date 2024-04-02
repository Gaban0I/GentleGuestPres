import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceDeVoyagesComponent } from './agence-de-voyages.component';

describe('AgenceDeVoyagesComponent', () => {
  let component: AgenceDeVoyagesComponent;
  let fixture: ComponentFixture<AgenceDeVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenceDeVoyagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgenceDeVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
