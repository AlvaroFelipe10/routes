import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicListComponent } from './electronic-list.component';

describe('ElectronicListComponent', () => {
  let component: ElectronicListComponent;
  let fixture: ComponentFixture<ElectronicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicListComponent]
    });
    fixture = TestBed.createComponent(ElectronicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
