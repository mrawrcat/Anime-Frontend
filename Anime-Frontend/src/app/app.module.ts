import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputComponent } from './input/input.component';

import { ImageViewComponent } from './image-view/image-view.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeComponent } from './anime/anime.component';
import { HomeComponent } from './home/home.component';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {NgIf} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ImageViewComponent,
    AnimeDetailComponent,
    AnimeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
