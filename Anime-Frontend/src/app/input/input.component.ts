import { Component, OnInit } from '@angular/core';
import { JikanApiService } from '../jikan-api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor(private jikanApiService: JikanApiService){}
  img_url: any;
  anime_query: any;
  myData$: any;
  getTestInit(){
    const testTitle = "Naruto";
    this.jikanApiService.getAnime(testTitle).subscribe(
      (data: any)=>{
        this.anime_query = data;
        console.log("anime_query: ", this.anime_query);
      },
      (error:any) => {
        console.error(error);
      }
    )
  } 

  getAnimeQuery(){
    this.myData$ = this.jikanApiService.getAnime("naruto");
  }

  ngOnInit(): void {
    this.getTestInit();
  }
}
