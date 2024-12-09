import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYourvisitComponent } from './plan-yourvisit.component';

describe('PlanYourvisitComponent', () => {
  let component: PlanYourvisitComponent;
  let fixture: ComponentFixture<PlanYourvisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanYourvisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanYourvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
