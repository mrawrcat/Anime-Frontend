import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { JikanApiService } from '../jikan-api.service';
import { InputComponent } from '../input/input.component';
import { AnimeData } from '../animedata';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input() housingLocation!: AnimeData;
  @Input() animeImage: string;
  @Input() animeTitle: string;
  @Input() testanimedata: string;
  animeData: AnimeData[] = [];
  // constructor(private jikanApiService: JikanApiService){}

  // getTestInit(){
  //   const testTitle = "Naruto";
  //   this.jikanApiService.getAnime(testTitle).subscribe(
  //     (data: any)=>{
  //       this.anime_init = data;
  //       console.log("anime_init: ", this.anime_init);
  //       console.log("anime_init_first: ", this.anime_init.data[0]);

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
