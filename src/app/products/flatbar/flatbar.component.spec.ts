import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatbarComponent } from './flatbar.component';

describe('FlatbarComponent', () => {
  let component: FlatbarComponent;
  let fixture: ComponentFixture<FlatbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
