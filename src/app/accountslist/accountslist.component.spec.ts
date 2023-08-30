import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountslistComponent } from './accountslist.component';

describe('AccountslistComponent', () => {
  let component: AccountslistComponent;
  let fixture: ComponentFixture<AccountslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountslistComponent]
    });
    fixture = TestBed.createComponent(AccountslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
