import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroSearchComponent } from './app-hero-search.component';

describe('AppHeroSearchComponent', () => {
  let component: AppHeroSearchComponent;
  let fixture: ComponentFixture<AppHeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeroSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
