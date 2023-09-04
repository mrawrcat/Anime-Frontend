import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JikanApiService } from '../jikan-api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  anime_input: string;
  anime_query: any;
  columns: number = 2;
  click_item: string;
  @ViewChild('box', {static: true}) box: ElementRef;
  constructor(private jikanApiService: JikanApiService){}

  getAnime(){
    console.log("anime input string: ", this.anime_input, this.anime_input.toString());
    this.jikanApiService.getAnime(this.anime_input).subscribe(
      (data: any)=>{
        this.anime_query = data;
        console.log("anime_query: ", this.anime_query);
      },
      (error:any) => {
        console.error(error);
      }
    )
  }
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

  testStateInit(){
    const testTitle = "Naruto";
    this.jikanApiService.getAnimeData(testTitle).subscribe(
      (data: any)=>{
        this.anime_query = data;
        console.log('storage data: ', this.jikanApiService.state_storage);
      },
      (error:any) => {
        console.error(error);
      }
    )
  }

  setColumns() {
    this.columns = Math.floor(this.box.nativeElement.clientWidth / 250);
  }

  displaystuff(){
    console.log("clicked button");
    

  }

  ngOnInit(): void {
    this.getTestInit();
    this.testStateInit();
    this.setColumns();
  }
}
