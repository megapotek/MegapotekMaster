import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailobatComponent } from './detailobat.component';

describe('DetailobatComponent', () => {
  let component: DetailobatComponent;
  let fixture: ComponentFixture<DetailobatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailobatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailobatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
