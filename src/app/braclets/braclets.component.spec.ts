import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracletsComponent } from './braclets.component';

describe('BracletsComponent', () => {
  let component: BracletsComponent;
  let fixture: ComponentFixture<BracletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
