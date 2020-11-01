import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesReadComponent } from './heroes-read.component';

describe('HeroesReadComponent', () => {
  let component: HeroesReadComponent;
  let fixture: ComponentFixture<HeroesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
