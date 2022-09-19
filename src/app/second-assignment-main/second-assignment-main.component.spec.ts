import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAssignmentMainComponent } from './second-assignment-main.component';

describe('SecondAssignmentMainComponent', () => {
  let component: SecondAssignmentMainComponent;
  let fixture: ComponentFixture<SecondAssignmentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAssignmentMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAssignmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
