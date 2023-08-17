import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
    MatFormFieldModule, 
    MatInputModule, 
    MatNativeDateModule,
    MatSliderModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
})

export class MaterialModule {};