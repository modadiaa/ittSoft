import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoilsComponent } from './coils.component';

describe('CoilsComponent', () => {
  let component: CoilsComponent;
  let fixture: ComponentFixture<CoilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
