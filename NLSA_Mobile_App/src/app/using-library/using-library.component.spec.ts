import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingLibraryComponent } from './using-library.component';

describe('UsingLibraryComponent', () => {
  let component: UsingLibraryComponent;
  let fixture: ComponentFixture<UsingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
