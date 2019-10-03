import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryHandlerComponent } from './query-handler.component';

describe('QueryHandlerComponent', () => {
  let component: QueryHandlerComponent;
  let fixture: ComponentFixture<QueryHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
