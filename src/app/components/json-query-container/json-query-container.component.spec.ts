import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonQueryContainerComponent } from './json-query-container.component';

describe('JsonQueryContainerComponent', () => {
  let component: JsonQueryContainerComponent;
  let fixture: ComponentFixture<JsonQueryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JsonQueryContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonQueryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
