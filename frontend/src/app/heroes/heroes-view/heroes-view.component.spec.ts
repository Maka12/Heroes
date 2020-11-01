import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesViewComponent } from './heroes-view.component';

describe('HeroesViewComponent', () => {
  let component: HeroesViewComponent;
  let fixture: ComponentFixture<HeroesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
