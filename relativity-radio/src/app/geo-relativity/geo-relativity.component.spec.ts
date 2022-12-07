import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoRelativityComponent } from './geo-relativity.component';

describe('GeoRelativityComponent', () => {
  let component: GeoRelativityComponent;
  let fixture: ComponentFixture<GeoRelativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoRelativityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoRelativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
