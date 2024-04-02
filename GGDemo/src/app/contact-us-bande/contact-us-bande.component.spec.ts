import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsBandeComponent } from './contact-us-bande.component';

describe('ContactUsBandeComponent', () => {
  let component: ContactUsBandeComponent;
  let fixture: ComponentFixture<ContactUsBandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsBandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsBandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
