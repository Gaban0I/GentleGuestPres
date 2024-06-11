import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDeTourismeComponent } from './office-de-tourisme.component';

describe('OfficeDeTourismeComponent', () => {
  let component: OfficeDeTourismeComponent;
  let fixture: ComponentFixture<OfficeDeTourismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeDeTourismeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficeDeTourismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
