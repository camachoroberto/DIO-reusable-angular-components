import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTeamComponent } from './work-team.component';

describe('WorkTeamComponent', () => {
  let component: WorkTeamComponent;
  let fixture: ComponentFixture<WorkTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
