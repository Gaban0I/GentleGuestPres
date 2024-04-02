import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreBandeauComponent } from './titre-bandeau.component';

describe('TitreBandeauComponent', () => {
  let component: TitreBandeauComponent;
  let fixture: ComponentFixture<TitreBandeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreBandeauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreBandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
