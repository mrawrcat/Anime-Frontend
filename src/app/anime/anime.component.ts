import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
  @Input() animeImage: string;
  @Input() animeTitle: string;

}
