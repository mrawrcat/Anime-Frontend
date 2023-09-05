import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JikanApiService } from '../jikan-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  animeDataSubscription: Subscription;
  animeData: any;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private jikanApiService: JikanApiService) { }

  ngOnInit() {
    this.animeDataSubscription = this.jikanApiService.currentAnimeData.subscribe((animeData) => {
      this.animeData = animeData;
    });
    console.log('current animeData from anime-detail', this.animeData);
  }

}
