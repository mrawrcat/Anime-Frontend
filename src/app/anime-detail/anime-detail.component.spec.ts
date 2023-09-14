import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetailComponent } from './anime-detail.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageViewComponent } from '../image-view/image-view.component';

describe('AnimeDetailComponent', () => {
  let component: AnimeDetailComponent;
  let fixture: ComponentFixture<AnimeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule, 
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
      ],
      declarations: [
        AnimeDetailComponent,
        ImageViewComponent,
      ]
    });
    fixture = TestBed.createComponent(AnimeDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
