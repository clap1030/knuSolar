import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOperateComponent } from './component-operate.component';

describe('ComponentOperateComponent', () => {
  let component: ComponentOperateComponent;
  let fixture: ComponentFixture<ComponentOperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentOperateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
