import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountRequestsComponent } from './list-account-requests.component';

describe('ListAccountRequestsComponent', () => {
  let component: ListAccountRequestsComponent;
  let fixture: ComponentFixture<ListAccountRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAccountRequestsComponent]
    });
    fixture = TestBed.createComponent(ListAccountRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
