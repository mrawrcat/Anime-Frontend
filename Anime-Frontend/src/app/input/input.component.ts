import { Component, OnInit } from '@angular/core';
import { JikanApiService } from '../jikan-api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor(private jikanApiService: JikanApiService){}
  getTestInit(){
    const testTitle = "Naruto";
    this.jikanApiService.getAnime(testTitle).subscribe(
      (data: any)=>{
      },
      (error:any) => {
        console.error(error);
      }
    )
    console.log("animeTitle: ");
  } 
  ngOnInit(): void {
    this.getTestInit();
  }
}
