import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSKUComponent } from './form-sku.component';

describe('FormSKUComponent', () => {
  let component: FormSKUComponent;
  let fixture: ComponentFixture<FormSKUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSKUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSKUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
