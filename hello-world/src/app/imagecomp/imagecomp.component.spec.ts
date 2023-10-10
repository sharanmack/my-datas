import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecompComponent } from './imagecomp.component';

describe('ImagecompComponent', () => {
  let component: ImagecompComponent;
  let fixture: ComponentFixture<ImagecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagecompComponent]
    });
    fixture = TestBed.createComponent(ImagecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
