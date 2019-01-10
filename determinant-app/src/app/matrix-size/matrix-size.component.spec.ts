import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixSizeComponent } from './matrix-size.component';

describe('MatrixSizeComponent', () => {
  let component: MatrixSizeComponent;
  let fixture: ComponentFixture<MatrixSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
