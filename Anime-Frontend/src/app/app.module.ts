import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ImageViewComponent } from './image-view/image-view.component';

// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {NgIf} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    SidenavComponent,
    ImageViewComponent
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
