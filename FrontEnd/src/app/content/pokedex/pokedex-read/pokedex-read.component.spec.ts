import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexReadComponent } from './pokedex-read.component';

describe('PokedexReadComponent', () => {
  let component: PokedexReadComponent;
  let fixture: ComponentFixture<PokedexReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
