import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfestComponent } from './mainfest.component';

describe('MainfestComponent', () => {
  let component: MainfestComponent;
  let fixture: ComponentFixture<MainfestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainfestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
