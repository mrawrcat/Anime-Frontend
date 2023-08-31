import { Component, OnInit } from '@angular/core';
import { JikanApiService } from '../jikan-api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  // anime_query: any;
  // constructor(private jikanApiService: JikanApiService){}
  // getTestInit(){
  //   const testTitle = "Naruto";
  //   this.jikanApiService.getAnime(testTitle).subscribe(
  //     (data: any)=>{
  //       this.anime_query = data;
  //       console.log("anime_query: ", this.anime_query);
  //       console.log("test first query: ", this.anime_query.data[0]);
  //     },
  //     (error:any) => {
  //       console.error(error);
  //     }
  //   )
  // } 
  ngOnInit(): void {
    // this.getTestInit();
  }
}
