import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsosInfoComponent } from './asos-info.component';

describe('AsosInfoComponent', () => {
  let component: AsosInfoComponent;
  let fixture: ComponentFixture<AsosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
