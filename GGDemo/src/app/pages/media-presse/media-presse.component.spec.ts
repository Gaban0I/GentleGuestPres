import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPresseComponent } from './media-presse.component';

describe('MediaPresseComponent', () => {
  let component: MediaPresseComponent;
  let fixture: ComponentFixture<MediaPresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPresseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaPresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
