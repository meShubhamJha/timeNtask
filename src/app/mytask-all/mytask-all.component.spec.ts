import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytaskAllComponent } from './mytask-all.component';

describe('MytaskAllComponent', () => {
  let component: MytaskAllComponent;
  let fixture: ComponentFixture<MytaskAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytaskAllComponent]
    });
    fixture = TestBed.createComponent(MytaskAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
