import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsosSelComponent } from './asos-sel.component';

describe('AsosSelComponent', () => {
  let component: AsosSelComponent;
  let fixture: ComponentFixture<AsosSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsosSelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsosSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
