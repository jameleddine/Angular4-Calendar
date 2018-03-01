import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCalendrieComponent } from './body-calendrie.component';

describe('BodyCalendrieComponent', () => {
  let component: BodyCalendrieComponent;
  let fixture: ComponentFixture<BodyCalendrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCalendrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCalendrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
