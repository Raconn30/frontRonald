import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicosComponent } from './mecanicos.component';

describe('MecanicosComponent', () => {
  let component: MecanicosComponent;
  let fixture: ComponentFixture<MecanicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MecanicosComponent]
    });
    fixture = TestBed.createComponent(MecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
