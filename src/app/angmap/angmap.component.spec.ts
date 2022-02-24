import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmapComponent } from './angmap.component';

describe('AngmapComponent', () => {
  let component: AngmapComponent;
  let fixture: ComponentFixture<AngmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
