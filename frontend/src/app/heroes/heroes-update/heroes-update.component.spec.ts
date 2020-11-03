import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesUpdateComponent } from './heroes-update.component';

describe('HeroesUpdateComponent', () => {
  let component: HeroesUpdateComponent;
  let fixture: ComponentFixture<HeroesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
