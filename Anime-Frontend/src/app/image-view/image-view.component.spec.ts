import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponent } from './image-view.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        FormsModule
      ],
      declarations: [ImageViewComponent]
    });
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
