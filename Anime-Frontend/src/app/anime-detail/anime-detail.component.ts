import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JikanApiService } from '../jikan-api.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);

  anime_query: any;
  constructor(private jikanApiService: JikanApiService){}
  getTestInit(){
    const testTitle = "Naruto";
    this.jikanApiService.getAnime(testTitle).subscribe(
      (data: any)=>{
        this.anime_query = data;
        console.log("anime_query: ", this.anime_query);
        console.log("test first query: ", this.anime_query.data[0]);
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
