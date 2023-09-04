import { Component, OnInit } from '@angular/core';
import { AnimeData } from '../animedata';
import { JikanApiService } from '../jikan-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  anime_query: any;
  anime_sorted: any;
  constructor(private jikanApiService: JikanApiService){}
    housingLocationList: AnimeData[]=[
      {
        array_pos: 0,
        title: 'naruto',
        description: 'test naruto',
        image: 'blah',
      },
      {
        array_pos: 1,
        title: 'naruto1',
        description: 'test naruto1',
        image: 'blah1',
      }
    ]

    getTestInit(){
      const testTitle = "Naruto";
      this.jikanApiService.getAnime(testTitle).subscribe(
        (data: any)=>{
          this.anime_query = data;
          console.log("anime_query: ", this.anime_query);
          console.log("test first query: ", this.anime_query.data[0]);
          this.anime_sorted = this.anime_query.data;
          console.log("anime_sorted: ", this.anime_sorted);
        },
        (error:any) => {
          console.error(error);
        }
      )
    }

    ngOnInit(): void {
      this.getTestInit();
    }
}
