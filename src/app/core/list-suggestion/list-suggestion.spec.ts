import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuggestion } from './list-suggestion';

describe('ListSuggestion', () => {
  let component: ListSuggestion;
  let fixture: ComponentFixture<ListSuggestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSuggestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSuggestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
