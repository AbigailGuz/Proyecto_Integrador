import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSocialeComponent } from './red-sociale.component';

describe('RedSocialeComponent', () => {
  let component: RedSocialeComponent;
  let fixture: ComponentFixture<RedSocialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSocialeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedSocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
