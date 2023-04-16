import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyComponent } from './diy.component';

describe('DiyComponent', () => {
  let component: DiyComponent;
  let fixture: ComponentFixture<DiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
