import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsosGridComponent } from './asos-grid.component';

describe('AsosGridComponent', () => {
  let component: AsosGridComponent;
  let fixture: ComponentFixture<AsosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsosGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
