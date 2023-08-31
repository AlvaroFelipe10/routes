import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDetailComponent } from './electronic-detail.component';

describe('ElectronicDetailComponent', () => {
  let component: ElectronicDetailComponent;
  let fixture: ComponentFixture<ElectronicDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicDetailComponent]
    });
    fixture = TestBed.createComponent(ElectronicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
