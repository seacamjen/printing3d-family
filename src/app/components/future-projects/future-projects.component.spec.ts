import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProjectsComponent } from './future-projects.component';

describe('FutureProjectsComponent', () => {
  let component: FutureProjectsComponent;
  let fixture: ComponentFixture<FutureProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
