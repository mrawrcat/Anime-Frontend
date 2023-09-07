import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JikanApiService } from '../jikan-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  anime_input: string;
  anime_query: any;
  anime_sorted: any;
  animeSearchSubscription: Subscription;
  search_input: string;
  // columns: number = 2;
  // @ViewChild('box', {static: true}) box: ElementRef;


  constructor(private route: Router, private jikanApiService: JikanApiService ){}

    getAnime(){
      console.log("anime input string: ", this.anime_input);
      this.jikanApiService.getAnime(this.anime_input).subscribe(
        (data: any)=>{
          this.anime_query = data;
          console.log("anime_query: ", this.anime_query);
          console.log("test first query: ", this.anime_query.data[0]);
          this.anime_sorted = this.anime_query.data;
          console.log("anime_sorted: ", this.anime_sorted);
          this.jikanApiService.changeCurrentSearchTerm(this.anime_input);
          console.log(this.jikanApiService.getCurrentSearchTerm());
        },
        (error:any) => {
          console.error(error);
        }
      )
    }

    getTestInit(){ 
      console.log("init search: ", this.jikanApiService.getCurrentSearchTerm());
      let testTitle = "Naruto";
      if(this.jikanApiService.getCurrentSearchTerm() != undefined){
        testTitle = this.jikanApiService.getCurrentSearchTerm();
      }
      console.log("init input string: anime: ", this.anime_input, " search: ", this.search_input);
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

    // setColumns() {
    //   this.columns = Math.floor(this.box.nativeElement.clientWidth / 250);
    // }

    changeAnimeData(i: number){
      this.jikanApiService.changeAnimeData(this.anime_sorted[i]);
    }

    // changeSearchTerm(){
    //   this.jikanApiService.changeSearchTerm(this.anime_input);
    // }

    ngOnInit(): void {
      this.getTestInit();
      // this.setColumns();
    }

    // ngOnDestroy(){
    //   this.animeDataSubscription.unsubscribe();
    // }
}
