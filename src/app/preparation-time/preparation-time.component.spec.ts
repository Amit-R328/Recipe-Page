import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationTimeComponent } from './preparation-time.component';

describe('PreparationTimeComponent', () => {
  let component: PreparationTimeComponent;
  let fixture: ComponentFixture<PreparationTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
