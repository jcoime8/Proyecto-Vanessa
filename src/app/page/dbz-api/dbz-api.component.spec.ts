import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzApiComponent } from './dbz-api.component';

describe('DbzApiComponent', () => {
  let component: DbzApiComponent;
  let fixture: ComponentFixture<DbzApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbzApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
