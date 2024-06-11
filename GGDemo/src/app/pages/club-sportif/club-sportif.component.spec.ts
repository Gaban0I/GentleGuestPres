import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSportifComponent } from './club-sportif.component';

describe('ClubSportifComponent', () => {
  let component: ClubSportifComponent;
  let fixture: ComponentFixture<ClubSportifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubSportifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
