import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreProgrammesComponent } from './core-programmes.component';

describe('CoreProgrammesComponent', () => {
  let component: CoreProgrammesComponent;
  let fixture: ComponentFixture<CoreProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreProgrammesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
